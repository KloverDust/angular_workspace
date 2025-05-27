import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

export const authGuard = (allowedRoles?: string[]) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if (!loginService.isTokenValid()) {
    router.navigate(['/login']);
    return false;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const userRole = loginService.getUserRole();
    if (!userRole || !allowedRoles.includes(userRole)) {
      router.navigate(['/unauthorized']);
      return false;
    }
  }
  
  return true;
}; 