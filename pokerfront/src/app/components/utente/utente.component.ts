import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Utente from '../../model/utente';
import { UtenteService } from '../../service/utente.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class UtenteComponent {
  selected: 'dettaglio' | 'filtro' | 'lista' | 'aggiungi' = 'lista';
  selectedUtenteDettaglio: Utente | null = null;
  filtroCorrente = { nome: '', cognome: '' };

  constructor(private utenteService: UtenteService) {}

  onListaEvent(utente: Utente) {
    this.selectedUtenteDettaglio = utente;
    this.show('dettaglio');
  }

  onDettaglioEvent(msg: string) {
    console.log('Evento da figlio dettaglio:', msg);
    if (msg === 'deleted') {
      console.log('Utente eliminato con successo');
    }
    this.show('lista');
  }

  onFiltroEvent(f: { nome: string; cognome: string }): void {
    this.filtroCorrente = f;
    this.show('lista');
  }

  onAggiungiEvent(utente: Utente) {
    console.log('Nuovo utente aggiunto:', utente);
    this.show('lista');
  }

  show(section: 'filtro' | 'lista' | 'dettaglio' | 'aggiungi') {
    this.selected = section;
  }
}
