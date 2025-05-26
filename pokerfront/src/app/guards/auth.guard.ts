import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

export const authGuard = () => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if (!loginService.isTokenValid()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
}; 