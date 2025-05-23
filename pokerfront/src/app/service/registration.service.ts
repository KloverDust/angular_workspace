import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Utente, { UtenteRegistrazione } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8080/api/player'; // adjust this to match your backend URL 

  constructor(private http: HttpClient) { }

  register(user: UtenteRegistrazione): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiUrl}`, user);
  }
}   
