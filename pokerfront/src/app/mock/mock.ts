import Ruolo from '../model/ruolo';
import Tavolo from '../model/tavolo';
import Utente from '../model/utente';

export const RUOLI: Ruolo[] = [
  { id: 1, descrizione: 'Administrator', codice: 'ROLE_ADMIN' },
  { id: 2, descrizione: 'Standard Player', codice: 'ROLE_PLAYER' },
  { id: 3, descrizione: 'Special Player', codice: 'ROLE_SPECIAL_PLAYER' }
];


export const UTENTI: Utente[] = [
  {
    id: 5,
    nome: 'Luca',
    cognome: 'Rossi',
    username: 'lucarossi',
    dataRegistrazione: new Date('2023-11-20'),
    esperienzaAccumulata: 1500,
    creditoAccumulato: 250.75,
    stato: 'ATTIVO',
    ruolo: RUOLI[1]
  },
  {
    id: 6,
    nome: 'Maria',
    cognome: 'Bianchi',
    username: 'mariab',
    dataRegistrazione: new Date('2024-01-10'),
    esperienzaAccumulata: 3000,
    creditoAccumulato: 500.00,
    stato: 'SOSPESO',
    ruolo: RUOLI[2]
  }
];

export const TAVOLI: Tavolo[] = [
  { id: 10, esperienzaMin: 3, cifraMinima: 100.0, denominazione: 'Tavolo Esperti', dataCreazione: new Date('2024-01-15'), utenteCreazione : UTENTI[0]},
  { id: 11, esperienzaMin: 1, cifraMinima: 20.0, denominazione: 'Tavolo Principianti', dataCreazione: new Date('2024-03-10'), utenteCreazione : UTENTI[0]},
  { id: 12, esperienzaMin: 5, cifraMinima: 500.0, denominazione: 'Tavolo VIP', dataCreazione: new Date('2023-12-01'), utenteCreazione : UTENTI[0]}
];