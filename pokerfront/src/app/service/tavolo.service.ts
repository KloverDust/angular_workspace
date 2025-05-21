import { Injectable } from '@angular/core';
import Tavolo from '../model/tavolo';
import { TAVOLI } from '../mock/mock';

@Injectable({
  providedIn: 'root'
})
export class TavoloService {
  private tavoli: Tavolo[] = TAVOLI;

  constructor() { }

  getAllTavoli(): Tavolo[] {
    return this.tavoli;
  }

  getTavoloById(id: number): Tavolo | undefined {
    return this.tavoli.find(tavolo => tavolo.id === id);
  }

  filterTavoliByDenominazione(filtro: string): Tavolo[] {
    return this.tavoli.filter(tavolo => tavolo.denominazione.toLowerCase().includes(filtro.toLowerCase()));
  }

  addTavolo(tavolo: Tavolo): void {
    this.tavoli.push(tavolo);
  }

  deleteTavolo(id: number): void {
    this.tavoli = this.tavoli.filter(tavolo => tavolo.id !== id);
  }

  updateTavolo(tavolo: Tavolo): void {
    const index = this.tavoli.findIndex(t => t.id === tavolo.id);
    if (index !== -1) {
      this.tavoli[index] = tavolo;
    }
  }
}
