import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Utente, { UtenteLogin } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; 

  constructor(private http: HttpClient) { }

  login(user: UtenteLogin): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, user);
  }

  isTokenValid(): boolean {
    const token: string | null = localStorage.getItem('token');
    if (!token) return false;

    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        console.error('Invalid JWT token format');
        return false;
      }
      const payload = JSON.parse(atob(parts[1]));
      const expirationDate = new Date(payload.exp * 1000);
      return expirationDate > new Date();
    } catch (error) {
      console.error('Error validating token:', error);
      console.log('Token value:', token); 
      return false;
    }
  }

  getUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const payload = JSON.parse(atob(parts[1]));
      return payload.ruolo;
    } catch (error) {
      console.error('Error parsing token:', error);
      return null;
    }
  }
}
