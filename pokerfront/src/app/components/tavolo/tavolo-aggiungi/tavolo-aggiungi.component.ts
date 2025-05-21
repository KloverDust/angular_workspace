import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TavoloService } from '../../../service/tavolo.service';
import Tavolo from '../../../model/tavolo';
import { UTENTI } from '../../../mock/mock';

@Component({
  selector: 'app-tavolo-aggiungi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tavolo-aggiungi.component.html',
  styleUrl: './tavolo-aggiungi.component.scss'
})
export class TavoloAggiungiComponent {
  @Output() notify = new EventEmitter<Tavolo>();
  @Output() close = new EventEmitter<void>();

  nuovoTavolo: Partial<Tavolo> = {
    denominazione: '',
    esperienzaMin: 0,
    cifraMinima: 0,
    dataCreazione: new Date(),
    utenteCreazione: UTENTI[0] // Default al primo utente disponibile
  };

  constructor(private tavoloService: TavoloService) {}

  onSubmit() {
    const newId = Math.max(...this.tavoloService.getAllTavoli().map(t => t.id)) + 1;
    
    const tavoloCompleto = {
      ...this.nuovoTavolo,
      id: newId
    } as Tavolo;

    this.tavoloService.addTavolo(tavoloCompleto);
    this.notify.emit(tavoloCompleto);
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
} 