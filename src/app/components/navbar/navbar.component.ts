import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import User from '../../models/user.interface';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent implements OnInit {
  darkMode = false;
  userName: string | null = null; 

  constructor(private userService: UserService) {
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

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
  next: (user: User) => {
    this.userName = user.firstName; // ou `${user.firstName} ${user.name}` si tu veux les deux
    console.log('Utilisateur actuel récupéré :', user.firstName, user.name);
  },
  error: (err) => {
    console.error('Erreur lors de la récupération de l’utilisateur actuel:', err);
    this.userName = null;
  }
});
  }
}
