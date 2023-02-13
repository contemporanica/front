import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MySheetsComponent } from './pages/my-sheets/my-sheets.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MySheetsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
