import { Component,Input,Output } from '@angular/core';
import { FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder) {

  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get pass() {
    return this.formUser.get('pass') as FormControl;
  }

  formUser = this.fb.group( {
    'email': ['', [Validators.required, Validators.email]],
    'pass': ['', Validators.required]
  });

  submit() {
    console.log(this.formUser.value)
  }

  // @Input();

  // @Output();
}
