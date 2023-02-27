import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  musicSheet: string = '';
  composer: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  //Recoger el valor del input cuando el usuario vaya escribiendo
  onInputChange(event: string) {
  
    console.log(event);

  }
  //Mandar el valor del input al componente padre
  onSearch() {

    console.log(this.musicSheet);
    console.log(this.composer);

    this.search.emit(this.musicSheet);
    this.search.emit(this.composer);
  }

}
