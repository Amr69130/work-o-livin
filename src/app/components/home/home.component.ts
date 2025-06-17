import { Component, inject, OnInit } from '@angular/core';
import Announcement from '../../models/announcement.interface';
import User from '../../models/user.interface';
import Image from '../../models/image.interface';
import Service from '../../models/service.interface';
import Equipment from '../../models/equipment.interface';
import Reservation from '../../models/reservation.interface';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description: string = `Faites nous confiance : Nos équipes de professionnels sont là pour vous assurer tout le confort nécessaire.
Le ménage compris et le service de blanchisserie vous permetteront d’augmenter éfficacement votre productivité et votre expérience chez nous. 
Leader dans son domaine depuis 3ans Work’O’Livin’ vous prouvera que l’essayer c’est adopter !`;

  private httpClient: HttpClient = inject(HttpClient);

  title: string = 'Mes annonces';

  announcements: Announcement[] = [];

  ngOnInit(): void {

    this.httpClient.get<Announcement[]>('http://51.254.112.67/api/announcements',
      { headers: { 'accept': 'application/json' } }
    ).subscribe({
      next: (data) => {
        this.announcements = data;
        console.log(this.announcements);
      }

    });

  }
}
