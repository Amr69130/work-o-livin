import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Announcement from '../../models/announcement.interface';
import { AnnouncementService } from '../../services/announcement.service';
import {ServicesPipe} from '../../pipes/services.pipe';

@Component({
  selector: 'app-announcement-detail',
  standalone: true,
  imports: [CommonModule, ServicesPipe],
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {
  announcement: Announcement|undefined;

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.announcementService.getAnnouncementById(id).subscribe({
      next: (data) => {
        this.announcement = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'annonce', err);
      }
    });
  }
}

