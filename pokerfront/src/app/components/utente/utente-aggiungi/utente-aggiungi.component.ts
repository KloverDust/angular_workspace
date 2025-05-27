import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtenteService } from '../../../service/utente.service';
import Utente from '../../../model/utente';
import { Stato } from '../../../model/utente';
import { RUOLI } from '../../../mock/mock';

@Component({
  selector: 'app-utente-aggiungi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './utente-aggiungi.component.html',
  styleUrl: './utente-aggiungi.component.scss'
})
export class UtenteAggiungiComponent {
  @Output() notify = new EventEmitter<Utente>();
  @Output() close = new EventEmitter<void>();

  nuovoUtente: Partial<Utente> = {
    nome: '',
    cognome: '',
    username: '',
    stato: 'ATTIVO',
    esperienzaAccumulata: 0,
    creditoAccumulato: 0,
    dataRegistrazione: new Date(),
    ruolo: RUOLI[1] // Default a ROLE_PLAYER
  };

  constructor(private utenteService: UtenteService) {}

  onSubmit() {
    this.utenteService.getAllUtenti().subscribe(utenti => {
      const newId = Math.max(...utenti.map(u => u.id)) + 1;
    
    const utenteCompleto = {
      ...this.nuovoUtente,
      id: newId
    } as Utente;

      this.utenteService.addUtente(utenteCompleto).subscribe(() => {
        this.notify.emit(utenteCompleto);
        this.close.emit();
      });
    });
  }

  onCancel() {
    this.close.emit();
  }
}
