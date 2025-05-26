import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Utente, { UtenteLogin } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // adjust this to match your backend URL

  constructor(private http: HttpClient) { }

  login(user: UtenteLogin): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, user);
  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const jwtToken = JSON.parse(token)['jwt-token'];
      const payload = JSON.parse(atob(jwtToken.split('.')[1]));
      const expirationDate = new Date(payload.exp * 1000);
      return expirationDate > new Date();
    } catch (error) {
      console.error('Error validating token:', error);
      return false;
    }
  }
}
