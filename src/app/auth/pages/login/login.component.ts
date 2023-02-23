import { Component, Input, Output } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get pass() {
    return this.formUser.get('pass') as FormControl;
  }

  formUser: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required, Validators.minLength(8)],
  });

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  submit() {
    console.log(this.formUser.value);
    const { email, pass } = this.formUser.value;

    this._authService.login(email, pass).subscribe((ok) => {
      if (ok === true) {
        this._router.navigateByUrl('./browse');
      } else {
        console.log(ok);
      }
    });
  }
}
