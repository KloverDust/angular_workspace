import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Utente, { UtenteRegistrazione } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8080/api/auth/register'; 


  constructor(private http: HttpClient) { }

  registerPlayer(user: UtenteRegistrazione): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiUrl}`, user);
  }

  registerAdmin(user: UtenteRegistrazione): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiUrl}`, user);
  }

  registerCroupier(user: UtenteRegistrazione): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiUrl}`, user);
  }
}   
