import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MySheetsComponent } from './pages/my-sheets/my-sheets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MySheetsComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
