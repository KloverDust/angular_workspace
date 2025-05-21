import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuoloComponent } from './ruolo.component';

describe('RuoloComponent', () => {
  let component: RuoloComponent;
  let fixture: ComponentFixture<RuoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
