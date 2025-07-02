import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import User from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3NTEzNzQyMjMsImV4cCI6MTc1MTM3NzgyMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibGVtYXJvdWNoZUB0ZXN0LmNvbSJ9.NehoGuQkJOzYQC42JFRYN1dwQ2UvA83lPtJS_h5YsOFbuMzZ9qZKBZy9Whi0BkeTW6JuD9AEQymsNGfI2r1gkeFp_GgcPSkXtBy7FzkQfr8Ziydk3W3eTRN6it2AnpSF-BBWqcNgl1lPm_LcCuoH94uh6Exf5jBH7o5ddOlGvC816Dhx68-hnzpYIt9r5zgoqXPgO1ooI-Q0Cu8-JubPlfmU9n6Q-RKfUej92q4g8hiuqJVYCEUdqcbeog2dM-x9rfBG55dbo9eU273c7m1qkNxQqvo5in03u65ZcAdJd0u3xz3TVi4u4yLUuTOvmAbZwdGuIaMneA9OFV-fRPVggw'
  private apiUrlCurrentUser: string = `${environment.apiUrl}api/me`;
  private apiUrlRegister: string = `${environment.apiUrl}api/register`;

  constructor(private http: HttpClient) {}

  getCurrentUser(token: string): Observable<User> {
    return this.http.get<User>(this.apiUrlCurrentUser, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }

  register(userData: { email: string; username: string; password: string }): Observable<User> {
    return this.http.post<User>(this.apiUrlRegister, userData, {
      headers: { 'accept': 'application/json' }
    });
  }
}
