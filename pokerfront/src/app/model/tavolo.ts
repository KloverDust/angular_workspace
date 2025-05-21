import Utente from './utente';

export default interface Tavolo {
    id: number;
    esperienzaMin: number;
    cifraMinima: number;
    denominazione: string;
    dataCreazione: Date;
    utenteCreazione: Utente
}