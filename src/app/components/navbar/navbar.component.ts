import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
  darkMode = false;

  constructor() {
    // Vérifie la préférence stockée au démarrage
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    if (this.darkMode) {
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', this.darkMode.toString());
  }
}

