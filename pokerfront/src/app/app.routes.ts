import { Routes } from '@angular/router';
import { TavoloComponent } from './components/tavolo/tavolo.component';
import { TavoloListaComponent } from './components/tavolo/tavolo-lista/tavolo-lista.component';
import { TavoloDettaglioComponent } from './components/tavolo/tavolo-dettaglio/tavolo-dettaglio.component';
import { TavoloAggiungiComponent } from './components/tavolo/tavolo-aggiungi/tavolo-aggiungi.component';
import { UtenteComponent } from './components/utente/utente.component';
import { UtenteListaComponent } from './components/utente/utente-lista/utente-lista.component';
import { UtenteDettaglioComponent } from './components/utente/utente-dettaglio/utente-dettaglio.component';
import { UtenteAggiungiComponent } from './components/utente/utente-aggiungi/utente-aggiungi.component';
import { RuoloComponent } from './components/ruolo/ruolo.component';
import { UtenteWelcomeComponent } from './components/utente/utente-welcome/utente-welcome.component';
import { TavoloWelcomeComponent } from './components/tavolo/tavolo-welcome/tavolo-welcome.component';
export const routes: Routes = [
    {
      path: 'tavolo',
      component: TavoloComponent,
      title: 'Gestione Tavoli',
      children: [
        { path: '', component: TavoloWelcomeComponent, title: 'Gestione Tavoli' },
        { path: 'lista', component: TavoloListaComponent, title: 'Lista Tavoli' },
        { path: 'aggiungi', component: TavoloAggiungiComponent, title: 'Nuovo Tavolo' },
        { path: 'dettaglio/:id', component: TavoloDettaglioComponent, title: 'Dettaglio Tavolo' }
      ]
    },
    {
      path: 'utente',
      component: UtenteComponent,
      title: 'Gestione Utenti',
      children: [
        { path: '', component: UtenteWelcomeComponent, title: 'Gestione Utenti' },
        { path: 'lista', component: UtenteListaComponent, title: 'Lista Utenti' },
        { path: 'aggiungi', component: UtenteAggiungiComponent, title: 'Nuovo Utente' },
        { path: 'dettaglio/:id', component: UtenteDettaglioComponent, title: 'Dettaglio Utente' }
      ]
    },
    {
      path: 'ruolo',
      component: RuoloComponent,
      title: 'Gestione Ruoli'
    },
    { path: '', redirectTo: '/tavolo', pathMatch: 'full' },
    { path: '**', redirectTo: '/tavolo' }
  ];