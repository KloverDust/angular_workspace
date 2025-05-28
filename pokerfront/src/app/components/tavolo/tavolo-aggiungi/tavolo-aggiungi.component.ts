import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TavoloService } from '../../../service/tavolo.service';
import Tavolo from '../../../model/tavolo';

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
    utenteCreazione: undefined // Default al primo utente disponibile
  };

  constructor(private tavoloService: TavoloService) {}

  onSubmit() {
    this.tavoloService.addTavolo(this.nuovoTavolo as Tavolo).subscribe(tavoloSalvato => {
      this.notify.emit(tavoloSalvato);
      this.close.emit();
    });
  }

  onCancel() {
    this.close.emit();
  }
} 