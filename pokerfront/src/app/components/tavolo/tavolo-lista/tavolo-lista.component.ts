import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TavoloService } from '../../../service/tavolo.service';
import Tavolo from '../../../model/tavolo';

@Component({
  selector: 'app-tavolo-lista',
  imports: [CommonModule],
  templateUrl: './tavolo-lista.component.html',
  styleUrl: './tavolo-lista.component.scss'
})
export class TavoloListaComponent implements OnInit {
  @Input() filtro!: { denominazione: string; esperienzaMin: number };
  @Output() notify = new EventEmitter<Tavolo>();

  tavoli: Tavolo[] = [];
  tavoliFiltrati: Tavolo[] = [];

  constructor(private tavoloService: TavoloService) {}

  ngOnInit() {
    this.tavoli = this.tavoloService.getAllTavoli();
    this.tavoliFiltrati = [...this.tavoli];
  }

  ngOnChanges(): void {
    this.applyFiltro();
  }

  private applyFiltro(): void {
    if (!this.tavoli) {
      this.tavoliFiltrati = [];
      return;
    }

    const denominazione = (this.filtro?.denominazione || '').toLowerCase();
    const esperienzaMin = this.filtro?.esperienzaMin || 0;

    this.tavoliFiltrati = this.tavoli.filter(t =>
      (!denominazione || t.denominazione.toLowerCase().includes(denominazione)) &&
      (!esperienzaMin || t.esperienzaMin >= esperienzaMin)
    );
  }

  onInfoClick(tavolo: Tavolo): void {
    this.notify.emit(tavolo);
  }
}
