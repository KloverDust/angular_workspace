import { Injectable } from '@angular/core';
import Utente from '../model/utente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiUrl}/admin/giocatori`);
  }

  getUtenteById(id: number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiUrl}/admin/${id}`);
  }

  filterUtentiByNome(nome: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiUrl}/search?nome=${nome}`);
  }

  filterUtentiByUsername(username: string): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.apiUrl}/search?username=${username}`);
  }

  addUtente(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(this.apiUrl, utente);
  }

  removeUtente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUtente(utente: Utente): Observable<Utente> {
    return this.http.put<Utente>(`${this.apiUrl}/${utente.id}`, utente);
  }

  getUtenteByUsername(username: string): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiUrl}/search?username=${username}`);
  }

}
