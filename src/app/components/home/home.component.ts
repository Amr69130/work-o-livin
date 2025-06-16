import { Component, OnInit } from '@angular/core';
import Announcement from '../../models/announcement.interface';
import User from '../../models/user.interface';
import Image from '../../models/image.interface';
import Service from '../../models/service.interface';
import Equipment from '../../models/equipment.interface';
import Reservation from '../../models/reservation.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description: string = `Faites nous confiance : Nos équipes de professionnels sont là pour vous assurer tout le confort nécessaire.
Le ménage compris et le service de blanchisserie vous permetteront d’augmenter éfficacement votre productivité et votre expérience chez nous. 
Leader dans son domaine depuis 3ans Work’O’Livin’ vous prouvera que l’essayer c’est adopter !`;

  announcements: Announcement[] = [];

  ngOnInit() {
    this.announcements = [
      {
        id: 1,
        title: 'Superbe maison avec piscine',
        description: 'Une maison parfaite pour vos vacances en famille.',
        fullAddress: '123 Rue des Fleurs, 75000 Paris',
        address: '123 Rue des Fleurs',
        city: 'Paris',
        zipcode: '75000',
        lattitude: '48.8566',
        longitude: '2.3522',
        maxClient: 5,
        dailyPrice: 100,
        imageCover: 'https://cdn.hometogo.net/assets/media/pics/1200_628/6408a0d55b93c.jpeg',
        owner: { id: 1, name: 'Jean Dupont' } as User,
        images: [{ id: 1, imageUrl: 'https://cdn.hometogo.net/assets/media/pics/1200_628/6408a0d55b93c.jpeg' } as Image],
        services: [] as Service[],
        equipment: [] as Equipment[],
        reservations: [] as Reservation[]
      },
      {
        id: 2,
        title: 'Appartement proche plage',
        description: 'Profitez de vos vacances près de la plage.',
        fullAddress: '45 Boulevard de la plage, 06600 Antibes',
        address: '45 Boulevard de la plage',
        city: 'Antibes',
        zipcode: '06600',
        lattitude: '43.5801',
        longitude: '7.1219',
        maxClient: 4,
        dailyPrice: 80,
        imageCover: 'https://www.agencespapaziansanary.com/public/img/big/9937041bjpg_628b358a9924e.jpg',
        owner: { id: 2, name: 'Alice Martin' } as User,
        images: [{ id: 1, imageUrl: 'https://www.agencespapaziansanary.com/public/img/big/9937041bjpg_628b358a9924e.jpg' } as Image],
        services: [] as Service[],
        equipment: [] as Equipment[],
        reservations: [] as Reservation[]
      },
      {
        id: 3,
        title: 'Chalet à la montagne',
        description: 'Calme, nature et dépaysement.',
        fullAddress: '12 Allée des Sapins, 73320 Tignes',
        address: '12 Allée des Sapins',
        city: 'Tignes',
        zipcode: '73320',
        lattitude: '45.4665',
        longitude: '6.9075',
        maxClient: 6,
        dailyPrice: 150,
        imageCover: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/81/3b/f2/chalet-de-montagne-katschberg.jpg',
        owner: { id: 3, name: 'Pierre Bernard' } as User,
        images: [{ id: 1, imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/81/3b/f2/chalet-de-montagne-katschberg.jpg' } as Image],
        services: [] as Service[],
        equipment: [] as Equipment[],
        reservations: [] as Reservation[]
      },
    ];
  }
}
