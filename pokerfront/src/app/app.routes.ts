import { Routes } from '@angular/router';
import { UtenteListaComponent } from './components/utente/utente-lista/utente-lista.component';
import { TavoloListaComponent } from './components/tavolo/tavolo-lista/tavolo-lista.component';
import { UtenteAggiungiComponent } from './components/utente/utente-aggiungi/utente-aggiungi.component';
import { TavoloAggiungiComponent } from './components/tavolo/tavolo-aggiungi/tavolo-aggiungi.component';
import { UtenteDettaglioComponent } from './components/utente/utente-dettaglio/utente-dettaglio.component';
import { LoginComponent } from './components/login/login.component';
import { TavoloDettaglioComponent } from './components/tavolo/tavolo-dettaglio/tavolo-dettaglio.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'utenti', component: UtenteListaComponent },
  { path: 'utenti/nuovo', component: UtenteAggiungiComponent },
  { path: 'utenti/modifica/:id', component: UtenteAggiungiComponent },
  { path: 'utenti/dettaglio/:id', component: UtenteDettaglioComponent },
  { path: 'tavoli', component: TavoloListaComponent },
  { path: 'tavoli/nuovo', component: TavoloAggiungiComponent },
  { path: 'tavoli/modifica/:id', component: TavoloAggiungiComponent },
  {path: 'tavoli/dettaglio/:id', component: TavoloDettaglioComponent}
];
