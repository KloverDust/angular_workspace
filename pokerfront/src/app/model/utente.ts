import Ruolo from './ruolo';

export type Stato = 'ATTIVO' | 'SOSPESO' | 'DISABILITATO';

export default interface Utente {
    id: number;
    nome: string;
    cognome: string;
    username: string;
    password?: string;
    dataRegistrazione: Date;
    esperienzaAccumulata: number;
    creditoAccumulato: number;
    stato: Stato;
    ruolo: Ruolo;
}

export interface UtenteLogin {
    username: string;
    password: string;
}

export interface UtenteRegistrazione {
    nome: string;
    cognome: string;
    username: string;
    password: string;
    creditoAccumulato?: number;
}