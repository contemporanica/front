import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MySheetsComponent } from './pages/my-sheets/my-sheets.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MySheetsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
