import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  activeDropdown: string | null = null;

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
} 