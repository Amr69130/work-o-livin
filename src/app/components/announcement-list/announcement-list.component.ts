import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Announcement from '../../models/announcement.interface';

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
