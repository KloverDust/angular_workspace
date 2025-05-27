import { Routes } from '@angular/router';
import { UtenteListaComponent } from './components/utente/utente-lista/utente-lista.component';
import { TavoloListaComponent } from './components/tavolo/tavolo-lista/tavolo-lista.component';
import { UtenteAggiungiComponent } from './components/utente/utente-aggiungi/utente-aggiungi.component';
import { TavoloAggiungiComponent } from './components/tavolo/tavolo-aggiungi/tavolo-aggiungi.component';
import { UtenteDettaglioComponent } from './components/utente/utente-dettaglio/utente-dettaglio.component';
import { LoginComponent } from './components/login/login.component';
import { TavoloDettaglioComponent } from './components/tavolo/tavolo-dettaglio/tavolo-dettaglio.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { authGuard } from './guards/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'utenti', 
    component: UtenteListaComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN', 'ROLE_SPECIAL_PLAYER'])] },
  { path: 'utenti/nuovo',
    component: UtenteAggiungiComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN'])] },
  { path: 'utenti/modifica/:id', 
    component: UtenteAggiungiComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN'])] },
  { path: 'utenti/dettaglio/:id', 
    component: UtenteDettaglioComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN', 'ROLE_SPECIAL_PLAYER'])] },
  { path: 'tavoli', 
    component: TavoloListaComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN', 'ROLE_SPECIAL_PLAYER'])] },
  { path: 'tavoli/nuovo', 
    component: TavoloAggiungiComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN'])] },
  { path: 'tavoli/modifica/:id', 
    component: TavoloAggiungiComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN'])] },
  { path: 'tavoli/dettaglio/:id', 
    component: TavoloDettaglioComponent, 
    canActivate: [() => authGuard(['ROLE_ADMIN', 'ROLE_SPECIAL_PLAYER'])] },
];
