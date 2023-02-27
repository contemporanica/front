import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ResultComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
