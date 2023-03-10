import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MySheetsComponent } from './pages/my-sheets/my-sheets.component';
import { AddSheetComponent } from './pages/add-sheet/add-sheet.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from '../shared/search/search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'my-sheets', component: MySheetsComponent },
      { path: 'add', component: AddSheetComponent },
      { path: 'edit/:id', component: AddSheetComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
