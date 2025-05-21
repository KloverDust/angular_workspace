import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  activeDropdown: string | null = null;

  showDropdown(menu: string): void {
    this.activeDropdown = menu;
  }

  hideDropdown(menu: string): void {
    if (this.activeDropdown === menu) {
      this.activeDropdown = null;
    }
  }
} 