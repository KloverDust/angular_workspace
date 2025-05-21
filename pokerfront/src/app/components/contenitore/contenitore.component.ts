import { Component } from '@angular/core';
import { UtenteComponent } from "../utente/utente.component";
import { TavoloComponent } from "../tavolo/tavolo.component";

@Component({
  selector: 'app-contenitore',
  imports: [UtenteComponent, TavoloComponent],
  templateUrl: './contenitore.component.html',
  styleUrl: './contenitore.component.scss'
})
export class ContenitoreComponent {

}
