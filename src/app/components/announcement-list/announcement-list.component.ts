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
  // PROPRIÉTÉ POUR LE MESSAGE SUCCESS
  showSuccess = true;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    // Chargement des annonces
    this.announcementService.getAnnouncements().subscribe({
      next: (data: Announcement[]) => {
        this.announcements = data;
        console.log(this.announcements);
      },
      error: (err: any) => {
        console.error('Error fetching announcements:', err);
      }
    });

    // Faire disparaître le message "Connexion réussie" après 4 secondes
    setTimeout(() => {
      this.showSuccess = false;
    }, 4000);
  }
}
