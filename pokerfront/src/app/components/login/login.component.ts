import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import Utente from '../../model/utente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatSnackBarModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  loading: boolean = false;      // ← add this

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) { return; }
    this.loading = true;          // ← and toggle it here
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response["jwt-token"]);
        localStorage.setItem(
          'role',
          JSON.parse(atob(response["jwt-token"].split('.')[1])).ruolo
        );
        this.loading = false;     // ← and here
        this.router.navigate(['/utenti']);
      },
      error: (error) => {
        this.loading = false;     // ← and also on error
        console.error('Login failed:', error);
        // Optionally show a MatSnackBar error message here
      }
    });
  }
}

