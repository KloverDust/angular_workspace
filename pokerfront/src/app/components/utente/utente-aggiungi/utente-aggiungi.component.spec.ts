import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteAggiungiComponent } from './utente-aggiungi.component';

describe('UtenteAggiungiComponent', () => {
  let component: UtenteAggiungiComponent;
  let fixture: ComponentFixture<UtenteAggiungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtenteAggiungiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtenteAggiungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
