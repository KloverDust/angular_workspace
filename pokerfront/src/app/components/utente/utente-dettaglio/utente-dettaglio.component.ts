import { Component, EventEmitter, Input, Output } from '@angular/core';
import Utente from '../../../model/utente';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../../service/utente.service';

@Component({
  selector: 'app-utente-dettaglio',
  imports: [CommonModule],
  templateUrl: './utente-dettaglio.component.html',
  styleUrl: './utente-dettaglio.component.scss'
})
export class UtenteDettaglioComponent {
  @Input() visible = false;
  @Input() utente: Utente | null = null;  
  @Output() notify = new EventEmitter<string>();

  constructor(private utenteService: UtenteService) {}

  emit(message: string) {
    this.notify.emit(message);
  }

  onClose() {
    this.notify.emit('close');
  }

  onDelete() {
    this.notify.emit('delete');
    if (this.utente && confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.utenteService.removeUtente(this.utente.id);
      this.notify.emit('deleted');
    }
  }
}

