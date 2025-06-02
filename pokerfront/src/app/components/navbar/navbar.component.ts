import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, MaterialModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbar = (event.target as HTMLElement).closest('.navbar');
    if (!navbar) {
      this.closeDropdown();
    }
  }

  toggleDropdown(menu: string): void {
    // If clicking the same menu that's already open, close it
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;
    } else {
      // If clicking a different menu, open it (and close any other open menu)
      this.activeDropdown = menu;
    }
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  register(): void {
    this.router.navigate(['/register']);
  }
} 