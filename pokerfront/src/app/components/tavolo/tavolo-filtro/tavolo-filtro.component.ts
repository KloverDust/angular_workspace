import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Tavolo from '../../../model/tavolo';

@Component({
  selector: 'app-tavolo-filtro',
  imports: [CommonModule, FormsModule],
  templateUrl: './tavolo-filtro.component.html',
  styleUrl: './tavolo-filtro.component.scss'
})
export class TavoloFiltroComponent {
  @Output() notify = new EventEmitter<{denominazione: string; esperienzaMin: number}>();

  filtro = {
    denominazione: '',
    esperienzaMin: 0
  };

  onSubmit(): void {
    this.notify.emit(this.filtro);
  }
}
