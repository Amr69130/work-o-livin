import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-announcement-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  announcementId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.announcementId = params.get('id');
    });
  }
}
