import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SearchComponent,
    ResultComponent,
  ],
  exports: [NavBarComponent, FooterComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
