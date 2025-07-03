import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceIcon',
  standalone: true
})
export class ServicesPipe implements PipeTransform {

  private iconMap: { [key: string]: string } = {
    'Ménage inclus': 'cleaning_services',
    'Linge de maison fourni': 'king_bed',
    'Accueil personnalisé': 'emoji_people',
    'Conciergerie 24h/24': 'support_agent',
    'Petit-déjeuner livré': 'breakfast_dining',
    'Courses livrées': 'local_grocery_store',
    'Navette aéroport': 'airport_shuttle',
    'Location de voiture': 'directions_car',
    'Guide touristique': 'map',
    'Réservation restaurants': 'restaurant',
    'Billetterie spectacles': 'confirmation_number',
    'Massages à domicile': 'spa',
    'Chef à domicile': 'restaurant_menu',
    'Baby-sitting': 'child_friendly',
    "Promenade d'animaux": 'pets',
    'Laverie express': 'local_laundry_service',
    'Maintenance technique': 'build',
    'Check-in tardif': 'schedule',
    'Stockage bagages': 'luggage',
    'WiFi professionnel': 'wifi',
  };

  transform(serviceTitle: string): string {
    return this.iconMap[serviceTitle] || 'help_outline'; // icône par défaut si non trouvée
  }
}
