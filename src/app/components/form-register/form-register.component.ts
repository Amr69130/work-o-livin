import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
registerForm: FormGroup;
isSubmitted = false;
isLoading = false;

constructor(private fb: FormBuilder) {
  this.registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}
onSubmit(): void {
    this.isSubmitted = true;

    if (this.registerForm.valid) {
      this.isLoading = true;
      const loginData = this.registerForm.value;
      console.log('Données de connexion:', loginData);

      setTimeout(() => {
        this.isLoading = false;
        console.log('Connexion réussie');
      }, 2000);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
