import { Component } from '@angular/core';
import { TavoloDettaglioComponent } from './tavolo-dettaglio/tavolo-dettaglio.component';
import { TavoloFiltroComponent } from './tavolo-filtro/tavolo-filtro.component';
import { TavoloListaComponent } from './tavolo-lista/tavolo-lista.component';
import { TavoloAggiungiComponent } from './tavolo-aggiungi/tavolo-aggiungi.component';
import { CommonModule } from '@angular/common';
import Tavolo from '../../model/tavolo';

@Component({
  selector: 'app-tavolo',
  imports: [CommonModule, TavoloDettaglioComponent, TavoloFiltroComponent, TavoloListaComponent, TavoloAggiungiComponent],
  templateUrl: './tavolo.component.html',
  styleUrl: './tavolo.component.scss'
})
export class TavoloComponent {
  selected: 'dettaglio' | 'filtro' | 'lista' | 'aggiungi' = 'lista';
  tavoloSelezionato?: Tavolo;
  filtroCorrente = {
    denominazione: '',
    esperienzaMin: 0
  };

  onListaEvent(tavolo: Tavolo) {
    this.tavoloSelezionato = tavolo;
    this.show('dettaglio');
  }

  onDettaglioEvent(msg: string) {
    console.log('Evento da figlio dettaglio:', msg);
    if (msg === 'deleted') {
      console.log('Tavolo eliminato con successo');
    }
    this.show('lista');
  }

  onFiltroEvent(filtro: {denominazione: string; esperienzaMin: number}) {
    console.log('Evento da figlio filtro:', filtro);
    this.filtroCorrente = filtro;
    this.show('lista');
  }

  onAggiungiEvent(tavolo: Tavolo) {
    console.log('Nuovo tavolo aggiunto:', tavolo);
    this.show('lista');
  }

  show(section: 'filtro' | 'lista' | 'dettaglio' | 'aggiungi') {
    this.selected = section;
  }
}
