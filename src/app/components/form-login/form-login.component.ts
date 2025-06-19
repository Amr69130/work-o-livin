import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent{
	
	// Propriété représentant le formulaire
  loginForm: FormGroup;
  // Booléns d'état
  isSubmitted = false;
  isLoading = false;


  constructor(private fb: FormBuilder) {
    //Création du form
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],  // Champ nommé email, requis, contrainte EMAIL
      
      username: ['', [Validators.required, Validators.minLength(3)]], // Champ nommé username, requis, contrainte longueur
      
      password: ['', [Validators.required, Validators.minLength(6)]] // Champ nommé email, requis, contrainte longueur
    });
  }
}
