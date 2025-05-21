import { Routes } from '@angular/router';
import { UtenteListaComponent } from './components/utente/utente-lista/utente-lista.component';
import { TavoloListaComponent } from './components/tavolo/tavolo-lista/tavolo-lista.component';
import { UtenteAggiungiComponent } from './components/utente/utente-aggiungi/utente-aggiungi.component';
import { TavoloAggiungiComponent } from './components/tavolo/tavolo-aggiungi/tavolo-aggiungi.component';

export const routes: Routes = [
  { path: '', redirectTo: '/utenti', pathMatch: 'full' },
  { path: 'utenti', component: UtenteListaComponent },
  { path: 'utenti/nuovo', component: UtenteAggiungiComponent },
  { path: 'utenti/modifica/:id', component: UtenteAggiungiComponent },
  { path: 'tavoli', component: TavoloListaComponent },
  { path: 'tavoli/nuovo', component: TavoloAggiungiComponent },
  { path: 'tavoli/modifica/:id', component: TavoloAggiungiComponent },
];
