import { Component, OnInit } from '@angular/core';
import Utente from '../../../model/utente';
import { CommonModule } from '@angular/common';
import { UtenteService } from '../../../service/utente.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.utente = this.utenteService.getUtenteById(id) || null;
      
      if (!this.utente) {
        this.router.navigate(['/utenti']);
      }
    });
  }

  onClose() {
    this.router.navigate(['/utenti']);
  }

  onDelete() {
    if (this.utente && confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.utenteService.removeUtente(this.utente.id);
      this.router.navigate(['/utenti']);
    }
  }
}

