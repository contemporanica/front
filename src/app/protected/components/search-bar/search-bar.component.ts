import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { FormControl,Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchServiceService } from 'src/app/shared/service/search-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  musicSheet: string = '';
  composer: string = '';
  sugerencias: any[] = [];
  query: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient, private _fb: FormBuilder,  private _searchService: SearchServiceService) {

  }

  formUser = this._fb.group( {
    'musicSheet': [''],
    'composer': [''],
    'sugerencias': ['']
  })
  ngOnInit(): void { }

  //Recoger el valor del input cuando el usuario vaya escribiendo y mostrar la lista de sugerencias 
  onInputChange(): void {
    if (this.query.length > 0) {
      this._searchService.searchByCompositor(this.query).subscribe( resp => {
        console.log(resp);
      })
      // }.pipe(debounceTime(500)).subscribe((sugerencias) => {
      //   this.sugerencias = sugerencias.slice(0, 5);
      // });
    } else { this.sugerencias = []; }
  }

  //Mandar el valor del input al componente padre 
  onSearch() {
    this.search.emit(this.musicSheet);
    this.search.emit(this.composer);
  }

}
