import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import User from '../models/user.interface';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient: HttpClient = inject(HttpClient);

  // Initialise avec la valeur stockée en localStorage (ou vide)
  private currentUserNameSubject = new BehaviorSubject<string>(localStorage.getItem('userName') || '');
  public currentUserName$ = this.currentUserNameSubject.asObservable();

  login(user: Partial<User>) {
    return this.httpClient.post<{ token: string, userName: string }>(
      environment.apiUrl + 'auth',
      user,
      {
        headers: { 'accept': 'application/json' }
      }
    ).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.userName);
        this.currentUserNameSubject.next(response.userName);
      })
    );
  }

  getUserName(): Observable<string> {
    return this.currentUserName$;
  }

  getCurrentUserName(): string {
    return this.currentUserNameSubject.value;
  }

    getCurrent(token:string) {
    return this.httpClient.get(environment.apiUrl + 'api/me',{
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + token
      },withCredentials: true
    });
  }
}
