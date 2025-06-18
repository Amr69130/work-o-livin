import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Announcement from '../models/announcement.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private apiUrl = 'http://51.254.112.67/api/announcements';


  constructor(private http: HttpClient) { }

  getAnnouncements() {
    return this.http.get<Announcement[]>(this.apiUrl, { headers: { 'accept': 'application/json' } });
  }

  getAnnouncementById(id: number): Observable<Announcement> {

    return this.http.get<Announcement>(`${this.apiUrl}/${id}`);
  }
}
