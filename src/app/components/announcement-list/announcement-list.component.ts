import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Announcement from '../../models/announcement.interface';
import { AnnouncementService } from '../../services/announcement.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css'
})
export class AnnouncementListComponent implements OnInit {
  
  private httpClient: HttpClient = inject(HttpClient);
  
  title: string = 'Mes annonces';
  
  announcements: Announcement[] = [];
  minPrice: number = 0;
maxPrice: number = 500;

sliderOptions: Options = {
  floor: 0,
  ceil: 500,
  step: 10,
  translate: (value: number): string => {
    return value + ' €';
  }
};

onFilterChange() {
  // Appeler API avec minPrice et maxPrice
  this.announcementService.getFilteredAnnouncementsByPrice(this.minPrice, this.maxPrice).subscribe({
    next: data => this.announcements = data,
    error: err => console.error(err)
  });
}


  // PROPRIÉTÉ POUR LE MESSAGE SUCCESS
  showSuccess = true;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    // Chargement des annonces
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data;
        console.log(this.announcements);
      },
      error: (err) => {
        console.error('Error fetching announcements:', err);
      }
    });

    // Faire disparaître le message "Connexion réussie" après 4 secondes
    setTimeout(() => {
      this.showSuccess = false;
    }, 4000);
  }
}
