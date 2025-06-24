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
    headers: { 'accept': 'application/json','Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3NTA3NTQzNjksImV4cCI6MTc1MDc1Nzk2OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibm9ycmlzQHRlc3QuY29tIn0.MuhW6UJLV-L7Mifc9AAnffXThAPeJBTL1HtT8Q9y_Vt0koZvVkVRh-WEaSb17gayvJy46-2c7dcXgIfwigiFPIfX_wS01VamGg4ar74tpsDFcv3RUiyCyQ47-l4xaRBsD-0u3Jh1X3bOpiE9_YGB7i6hHhY6CZ4rAiq2ASmkBIcinIbXI90V_eaXzO4-cymiJ9jTkUSY2KAfCCmSYstXjlAsmrkarXToOc0L_onm1qZu2elXLEDckRSbVxrSoWVbD4j5ECmQiwzN1shml5KiA79LPmb2NKhmVSeKKV9Taql_9kRlNXAwfCz62x24Bons0TApXMJ3XRX26svYXP8h2Q` }
  });
}

    


}
