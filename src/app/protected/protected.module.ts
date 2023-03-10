import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MySheetsComponent } from './pages/my-sheets/my-sheets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddSheetComponent } from './pages/add-sheet/add-sheet.component';

@NgModule({
  declarations: [
    MySheetsComponent,
    ProfileComponent,
    AddSheetComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule {}
