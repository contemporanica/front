import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})


export class SearchBarComponent implements OnInit{

  musicSheet: string = '';
  composer: string = '';
  sugerencias: any[] = [];

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //Recoger el valor del input cuando el usuario vaya escribiendo y mostrar la lista de sugerencias
  onInputChange(event: string): void {
    if (event.length > 0) {
      this.http.get<any[]>('url_api_', {
        params: {
          q: event
        }
      }).pipe(
        debounceTime(500)
      ).subscribe((sugerencias) => {
        this.sugerencias = sugerencias.slice(0, 5);
      });
    } else {
      this.sugerencias = [];
    }
  }

  //Mandar el valor del input al componente padre
  onSearch() {
    this.search.emit(this.musicSheet);
    this.search.emit(this.composer);
  }
}
