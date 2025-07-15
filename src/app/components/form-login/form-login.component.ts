import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
})

// A LA SOUMISSION DU FORMULAIRE DE LOGIN, JE RECUPERE UN TOKEN VIA L'API,
// PUIS J'UTILISE CE TOKEN POUR OBTENIR L'IDENTITE COMPLETE DE L'UTILISATEUR VIA UN SECOND APPEL.
// CES DONNEES SERONT UTILISEES PLUS TARD POUR D'AUTRES FONCTIONNALITES (WIP)
// ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓ ⇓

export class FormLoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  private formBuilder: FormBuilder = inject(FormBuilder)
  userService: UserService = inject(UserService)
  constructor(private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log('le login est validé');
      this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          const token: string = data.token
          console.log(token);
          if (token) {
            this.userService.getCurrent(token).subscribe({
              next: (data) => {
                console.log(data);
                  this.router.navigate(['announcement-list']);
              },
              error: (error) => {
                console.log(error);
              }
            })
          }
        },
        error: (error) => {
          console.log(error.message);
        },
      });
    }
  }
}
