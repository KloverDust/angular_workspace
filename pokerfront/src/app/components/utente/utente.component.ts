import { Component } from '@angular/core';
import { UtenteDettaglioComponent } from './utente-dettaglio/utente-dettaglio.component';
import { UtenteFiltroComponent } from './utente-filtro/utente-filtro.component';
import { UtenteListaComponent } from './utente-lista/utente-lista.component';
import { UtenteAggiungiComponent } from './utente-aggiungi/utente-aggiungi.component';
import { CommonModule } from '@angular/common';
import Utente from '../../model/utente';
import { UtenteService } from '../../service/utente.service';

@Component({
  selector: 'app-utente',
  imports: [CommonModule, UtenteDettaglioComponent, UtenteFiltroComponent, UtenteListaComponent, UtenteAggiungiComponent],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.scss'
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
