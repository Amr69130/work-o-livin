import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  private formBuilder: FormBuilder = inject(FormBuilder)

  constructor(private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
  this.isSubmitted = true;

  if (this.loginForm.valid) {
    this.isLoading = true;
    const loginData = this.loginForm.value;
    console.log('Données de connexion:', loginData);

    setTimeout(() => {
      this.isLoading = false;
      console.log('Connexion réussie en tant que :', loginData.username);

      this.router.navigate(['/announcement-list']); 

    }, 2000);
  } else {
    this.markAllFieldsAsTouched();
  }
}
  markAllFieldsAsTouched(): void {
    Object.values(this.loginForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
