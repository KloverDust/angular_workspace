import { Component, OnInit } from '@angular/core';
import Utente from '../../../model/utente';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../../service/utente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utente-dettaglio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utente-dettaglio.component.html',
  styleUrl: './utente-dettaglio.component.scss'
})
export class UtenteDettaglioComponent implements OnInit {
  utente: Utente | null = null;

  constructor(
    private utenteService: UtenteService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the ID from the current URL
    const id = Number(this.router.url.split('/').pop());
    this.utenteService.getUtenteById(id).subscribe({
      next: (utente) => {
        this.utente = utente;
      },
      error: (error) => {
        console.error('Error fetching user:', error);
        this.router.navigate(['/utenti']);
      }
    });
  }

  onClose() {
    this.router.navigate(['/utenti']);
  }

  onDelete() {
    if (this.utente && confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.utenteService.removeUtente(this.utente.id).subscribe({
        next: () => {
          this.router.navigate(['/utenti']);
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }
}

