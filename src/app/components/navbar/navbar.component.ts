import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import User from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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

  // ngOnInit(): void {
  //   this.userService.getCurrentUser(this.userService.token).subscribe({
  //     next: (user) => {
  //       this.userName = user.firstName; // ou `${user.firstName} ${user.name}` selon votre besoin
  //       console.log('Utilisateur actuel récupéré :', user.firstName, user.name);
  //     }
  //   });
  // }
}
