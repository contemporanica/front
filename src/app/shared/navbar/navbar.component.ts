import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../interface/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
  templateGuestMenu: MenuItem[] = [
    {
      text: 'Buscar Partitura',
      route: './search',
    },
    {
      text: 'Iniciar sesión',
      route: './auth/login',
    },
    {
      text: 'Registrarse',
      route: './auth/signup',
    },
  ];

  templateUserMenu: MenuItem[] = [
    {
      text: 'Buscar partitura',
      route: './search',
    },
    {
      text: 'Subir partitura',
      route: './auth/signup',
    },
  ];

  templateProfileMenu: MenuItem[] = [
    {
      text: 'Editar perfil',
      route: './browse/profile',
    },
    {
      text: 'Mis partituras',
      route: './browse/my-sheets',
    },
  ];

  constructor(private _router: Router) {}

  logout() {
    // Por implementar
  }
}
