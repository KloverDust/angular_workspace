import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Tavolo from '../model/tavolo';

@Injectable({
  providedIn: 'root'
})
export class TavoloService {
  private apiUrl = 'http://localhost:8080/api/tavolo';

  constructor(private http: HttpClient) { }

  getAllTavoli(): Observable<Tavolo[]> {
    return this.http.get<Tavolo[]>(`${this.apiUrl}/lista`);
  }

  getTavoloById(id: number): Observable<Tavolo> {
    return this.http.get<Tavolo>(`${this.apiUrl}/${id}`);
  }

  filterTavoliByDenominazione(filtro: string): Observable<Tavolo[]> {
    return this.http.get<Tavolo[]>(`${this.apiUrl}/search?denominazione=${filtro}`);
  }

  addTavolo(tavolo: Tavolo): Observable<Tavolo> {
    return this.http.post<Tavolo>(`${this.apiUrl}/crea`, tavolo);
  }

  deleteTavolo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateTavolo(tavolo: Tavolo): Observable<Tavolo> {
    return this.http.put<Tavolo>(`${this.apiUrl}/${tavolo.id}`, tavolo);
  }
}
