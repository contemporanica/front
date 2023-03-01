import { Component } from '@angular/core';
import { FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _fb: FormBuilder) {

  }

  get nombre() {
    return this.formUser.get('nombre') as FormControl;
  }

  get apellidos() {
    return this.formUser.get('apellidos') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get pass() {
    return this.formUser.get('pass') as FormControl;
  }

  formUser = this._fb.group( {
    'nombre': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'pass': ['', Validators.required],
    'apellidos': ['', Validators.required]
  });

  submit() {
    console.log(this.formUser.value)
  }

  // @Input();

  // @Output();
}
