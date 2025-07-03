import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  private route = inject(ActivatedRoute); // ✅


  description: string = `Créée en 2023, Work-O-Livin est une plateforme innovante dédiée à faciliter la mise en relation entre travailleurs et employeurs, en mettant l'accent sur la flexibilité, le travail à distance, et la qualité de vie professionnelle.

Notre mission est de révolutionner le marché du travail en offrant une expérience simple, sécurisée et efficace pour tous ceux qui cherchent à concilier carrière et mode de vie.

Grâce à une technologie de pointe et une interface intuitive, nous permettons à nos utilisateurs d’accéder facilement aux meilleures opportunités, adaptées à leurs compétences et ambitions.

Work-O-Livin valorise la diversité, l'inclusion, et le bien-être au travail. Nous croyons qu’un environnement professionnel épanouissant est la clé du succès, c’est pourquoi nous accompagnons chaque utilisateur avec des outils personnalisés, du coaching et un suivi attentif.

Notre communauté regroupe des professionnels de tous horizons, des indépendants, télétravailleurs, aux grandes entreprises cherchant à recruter de manière flexible.

Rejoindre Work-O-Livin, c’est choisir une nouvelle façon de travailler, plus libre, plus humaine, et tournée vers l’avenir.

Nous sommes fiers d’accompagner chaque jour des milliers de personnes vers la réussite professionnelle, partout en France et au-delà. Ensemble, construisons le futur du travail.`;



  ngOnInit() {

	}
}
