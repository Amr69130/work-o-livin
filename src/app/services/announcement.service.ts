import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Announcement from '../models/announcement.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private apiUrl: string = `${environment.apiUrl}api/announcements`;


  constructor(private http: HttpClient) { }

  getAnnouncements() {
    return this.http.get<Announcement[]>(this.apiUrl, { headers: { 'accept': 'application/json' } });
  }

  getAnnouncementById(id: number): Observable<Announcement> {

    return this.http.get<Announcement>(`${this.apiUrl}/${id}`);
  }
}
