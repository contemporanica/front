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
  onInputChange(event: any) {
    console.log(event);
  }
  //Mandar el valor del input al componente padre
  onSearch() {

    console.log(this.searchText);
    this.search.emit(this.searchText);
  }

}
