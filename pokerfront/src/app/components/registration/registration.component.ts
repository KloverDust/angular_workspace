import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import Utente from '../../model/utente';
import { RUOLI } from '../../mock/mock';
import Ruolo from '../../model/ruolo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  roles: Ruolo[] = RUOLI;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      credito: ['', [Validators.required, Validators.min(0)]],
      ruolo: [RUOLI[1], Validators.required] // Default to Player role
    });
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const ruolo = this.registrationForm.get('ruolo')?.value as Ruolo;
      let registration;
      
      switch (ruolo.id) {
        case 2:
          registration = this.registrationService.registerPlayer(this.registrationForm.value);
          break;
        case 1:
          registration = this.registrationService.registerAdmin(this.registrationForm.value);
          break;
        case 3:
          registration = this.registrationService.registerCroupier(this.registrationForm.value);
          break;
      }

      registration!.subscribe({
        next: response => {
          console.log('Registration successful:', response);
          this.snackBar.open('Registrazione completata con successo!', 'Chiudi', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration failed:', error);
          this.snackBar.open('Errore durante la registrazione. Riprova.', 'Chiudi', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      });
    }
  }
} 