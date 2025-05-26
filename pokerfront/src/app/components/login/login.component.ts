import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Utente from '../../model/utente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

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
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response: any) => { // Attenzione viene restituito in JWT TOKEN
          console.log('Login successful', response);
          localStorage.setItem('token', response);
          localStorage.setItem('role', JSON.parse(atob(response["jwt-token"].split(".")[1])).ruolo)
          this.router.navigate(['/utenti']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }
}
