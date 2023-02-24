import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchText: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  //Recoger el valor del input cuando el usuario vaya escribiendo
  onInputChange(event: string) {

  }
  //Mandar el valor del input al componente padre
  onSearch() {
    this.search.emit(this.searchText);
  }

}
