import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    rePassword: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
  });

  constructor(private _authApiService: AuthApiService) {}

  register() {
    this._authApiService
      .register(this.registerForm.value)
      .subscribe((res) => {});
  }
}
