import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import User from '../models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = `${environment.apiUrl}api/me`;
  
  
    constructor(private http: HttpClient) { }
  
    getCurrentUser(): Observable<User> {
  return this.http.get<User>(this.apiUrl, {
    headers: { 'accept': 'application/json' }
  });
}

     getUserById(id: number): Observable<User> {
    
        return this.http.get<User>(`${this.apiUrl}/${id}`);
      }


}
