import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Tavolo from '../../../model/tavolo';
import { TavoloService } from '../../../service/tavolo.service';

@Component({
  selector: 'app-tavolo-dettaglio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tavolo-dettaglio.component.html',
  styleUrl: './tavolo-dettaglio.component.scss'
})
export class TavoloDettaglioComponent {
  @Input() tavolo?: Tavolo;
  @Output() notify = new EventEmitter<string>();

  constructor(private tavoloService: TavoloService) {}

  onClose() {
    this.notify.emit('close');
  }

  onDelete() {
    if (this.tavolo && confirm('Sei sicuro di voler eliminare questo tavolo?')) {
      this.tavoloService.deleteTavolo(this.tavolo.id);
      this.notify.emit('deleted');
    }
  }
}
