import { Component, EventEmitter, Input, Output, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UtenteService } from '../../../service/utente.service';
import Utente from '../../../model/utente';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utente-lista',
  imports: [CommonModule],
  templateUrl: './utente-lista.component.html',
  styleUrl: './utente-lista.component.scss'
})
export class UtenteListaComponent implements OnInit {
  @Input() filtro!: { nome: string; cognome: string };
  @Output() notify = new EventEmitter<Utente>();

  utenti: Utente[] = [];
  utentiFiltrati: Utente[] = [];

  //Il private non rende disponibili le funzioni del service dal template !IMPORTANTE
  //constructor(private utenteService: UtenteService) {}
  // MODO ANALOGO PER INTRODURRE IL SERVICE ALL'INTERNO
  readonly utenteService: UtenteService = inject(UtenteService);
  private router: Router = inject(Router);

  ngOnInit() {
    this.utenti = this.utenteService.getAllUtenti();
    this.utentiFiltrati = [...this.utenti];
  }

  ngOnChanges(): void {
    this.applyFiltro();
  }

  private applyFiltro(): void {
    if (!this.utenti) {
      this.utentiFiltrati = [];
      return;
    }

    const n = (this.filtro?.nome || '').toLowerCase();
    const c = (this.filtro?.cognome || '').toLowerCase();

    this.utentiFiltrati = this.utenti.filter(u =>
      (!n || u.nome.toLowerCase().includes(n)) &&
      (!c || u.cognome.toLowerCase().includes(c))
    );
  }

  onInfoClick(utente: Utente): void {
    this.router.navigate(['/utente/dettaglio', utente.id]);
  }

  onListaEvent(event: Utente): void {
    this.notify.emit(event);
  }
}
