import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UTENTI } from '../../../mock/mock';
import Utente from '../../../model/utente';

@Component({
  selector: 'app-utente-filtro',
  imports: [FormsModule, CommonModule],
  templateUrl: './utente-filtro.component.html',
  styleUrl: './utente-filtro.component.scss'
})
export class UtenteFiltroComponent {
  @Input() visible = false;
  @Output() notify = new EventEmitter<{ nome: string; cognome: string }>();
  @Output() utenteSelezionato = new EventEmitter<Utente>();

  filtro = { nome: '', cognome: '' };
  utenti = UTENTI;
  utentiFiltrati: Utente[] = [];

  ngOnInit() {
    this.applyFiltro();
  }

  onChange(): void {
    this.notify.emit({ ...this.filtro });
    this.applyFiltro();
  }

  private applyFiltro(): void {
    const n = (this.filtro.nome || '').toLowerCase();
    const c = (this.filtro.cognome || '').toLowerCase();

    this.utentiFiltrati = this.utenti.filter(u =>
      (!n || u.nome.toLowerCase().includes(n)) &&
      (!c || u.cognome.toLowerCase().includes(c))
    );
  }

  onInfoClick(utente: Utente): void {
    this.utenteSelezionato.emit(utente);
  }
}
