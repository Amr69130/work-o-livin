# WorkOLivin

# Déploiement d'une seconde Application Angular sur une VM Google Cloud (Ubuntu 22.04)

## 0. Site accessible à l'adresse suivante :

[Work-o-livin](http://146.148.6.138)

## 1. Création de la VM

- **Fournisseur** : Google Cloud Platform (GCP)
- **Image** : Ubuntu 22.04 LTS
- **Pare-feu** : cocher les cases :
  - Autoriser le trafic HTTP
  - Autoriser le trafic HTTPS

## 2. Connexion à la VM avec une clé SSH

### 2.1 Génération de la clé SSH (sur la machine locale)

```
ssh-keygen -t rsa -b 4096 -C "norris@gcp"
```

- Fichier généré : `~/.ssh/id_gcp` et `~/.ssh/id_gcp.pub`

### 2.2 Ajout de la clé publique à la VM

- Console GCP > Compute Engine > VM > Modifier > Clés SSH
- Ajouter le contenu de `id_gcp.pub`

### 2.3 Connexion SSH à la VM

```
ssh -i ~/.ssh/id_gcp norris@[IP_PUBLIC_VM]
```

---

## 3. Préparation de l'application Angular

### 3.1 Build de production

```
ng build --configuration=production
```

- Le dossier `dist/` est généré.

### 3.2 Création d’une archive ZIP

```
zip -r dist.zip dist/
```

---

## 4. Transfert du projet sur la VM

```
scp -i ~/.ssh/id_gcp dist.zip norris@[IP_PUBLIC_VM]:/tmp/
```

---

## 5. Installation d’Apache

Sur la VM :

```
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 unzip curl -y
```

---

## 6. Déploiement de l'application sur Apache

### 6.1 Suppression des fichiers par défaut

```
sudo rm -rf /var/www/html/*
```

### 6.2 Extraction du projet Angular

```
sudo unzip /tmp/dist.zip -d /var/www/html
```

- Si les fichiers sont dans `dist/mon-app`, les déplacer :
  ```
  sudo mv /var/www/html/dist/mon-app/* /var/www/html/
  sudo rm -rf /var/www/html/dist
  ```

### 6.3 Attribution des permissions

```
sudo chown -R www-data:www-data /var/www/html
```

---

## 7. Configuration Apache pour Angular

### 7.1 Activation du module `mod_rewrite`

```
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 7.2 Autoriser les fichiers `.htaccess`

```
sudo nano /etc/apache2/sites-available/000-default.conf
```

Ajouter dans le bloc `<VirtualHost *:80>` :

```apache
<Directory /var/www/html>
    AllowOverride All
</Directory>
```

Puis :

```
sudo systemctl restart apache2
```

---

## 8. Configuration du fichier `.htaccess`

Créer le fichier `.htaccess` :

```
sudo nano /var/www/html/.htaccess
```

Ajouter :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Appliquer les permissions :

```
sudo chown www-data:www-data /var/www/html/.htaccess
sudo chmod 644 /var/www/html/.htaccess
```

---

## Accès à l'application

L'application Angular est maintenant accessible via :

```
http://[IP_PUBLIC_VM]
```

---

## Bonus

- Pour un nom de domaine : configure un enregistrement A pointant vers l'IP de la VM.
- Pour HTTPS : installe Let's Encrypt avec Certbot.

---
<img width="950" height="472" alt="screenshot_workolivin_all_deploy" src="https://github.com/user-attachments/assets/6518cbd1-1010-46f8-91b1-2d1e41269f49" />
<img width="1915" height="941" alt="screenshot_workolivin_all_inspect" src="https://github.com/user-attachments/assets/f98225cd-ebf5-49f1-84b4-06634eeb629e" />


