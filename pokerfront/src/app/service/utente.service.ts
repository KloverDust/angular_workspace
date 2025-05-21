import { Injectable } from '@angular/core';
import Utente from '../model/utente';
import { UTENTI } from '../mock/mock';
import { Stato } from '../model/utente';
import Ruolo  from '../model/ruolo';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private utenti: Utente[] = UTENTI;

  constructor() { }

  getAllUtenti(): Utente[] {
    return this.utenti;
  }

  getUtenteById(id: number): Utente | undefined {
    return this.utenti.find(utente => utente.id === id);
  }

  filterUtentiByNome(nome: string): Utente[] {
    return this.utenti.filter(utente => utente.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  filterUtentiByUsername(username: string): Utente[] {
    return this.utenti.filter(utente => utente.username.toLowerCase().includes(username.toLowerCase()));
  }

  addUtente(utente: Utente): void {
    this.utenti.push(utente);
  }

  removeUtente(id: number): void {
    this.utenti = this.utenti.filter(utente => utente.id !== id);
  }

  filterUtenti(filtro: { 
    nome?: string; 
    cognome?: string;
    stato?: Stato;
    ruolo?: Ruolo;
  }): Utente[] {
    return this.utenti.filter(utente => {
      const matchNome = !filtro.nome || utente.nome.toLowerCase().includes(filtro.nome.toLowerCase());
      const matchCognome = !filtro.cognome || utente.cognome.toLowerCase().includes(filtro.cognome.toLowerCase());
      const matchStato = !filtro.stato || utente.stato === filtro.stato;
      const matchRuolo = !filtro.ruolo || utente.ruolo.id === filtro.ruolo.id;
      
      return matchNome && matchCognome && matchStato && matchRuolo;
    });
  }

}
