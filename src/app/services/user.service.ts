import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import User from '../models/user.interface';
import { Observable } from 'rxjs';
import Announcement from '../models/announcement.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient = inject(HttpClient);


  login(user: Partial<User>) {
    return this.httpClient.post(
      environment.apiUrl + 'auth',
      user, {

        headers: {
          'accept': 'application/json'
        }
      });

  }


}
