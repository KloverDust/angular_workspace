import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Utente, { UtenteLogin } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/player/login'; // adjust this to match your backend URL

  constructor(private http: HttpClient) { }

  login(user: UtenteLogin): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiUrl}`, user);
  }
}