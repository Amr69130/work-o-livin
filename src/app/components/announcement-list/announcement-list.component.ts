import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Announcement from '../../models/announcement.interface';
import { AnnouncementService } from '../../services/announcement.service';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css'
})
export class AnnouncementListComponent {

  private httpClient: HttpClient = inject(HttpClient);
  
    title: string = 'Mes annonces';
  
    announcements: Announcement[] = [];
  
      constructor(private announcementService: AnnouncementService) {}



    ngOnInit(): void {
  
      this.announcementService.getAnnouncements().subscribe({
        next: (data) => {
          this.announcements = data;
          console.log(this.announcements);
        },
        error: (err) => {
          console.error('Error fetching announcements:', err);
        }
  
      });
  
    }
}
