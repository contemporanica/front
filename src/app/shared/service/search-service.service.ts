import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Composer, Family, Instrument } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private _apiUrl: String = 'http://contemporanica.com:4000/api/music';
  constructor(private _http: HttpClient) { }

  searchByCompositor( query: String ): Observable<Composer> {
    const url = `${ this._apiUrl }/composer/name/${ query }`; 
    return this._http.get<Composer>( url );
  }
  searchByInstrument( query: String ): Observable<Instrument> {
    const url = `${ this._apiUrl }/instrument/name/${ query }`; 
    return this._http.get<Instrument>( url );
  }
  searchByPiece( query: String ): Observable<any> {
    const url = `${ this._apiUrl }/name/name/${ query }`; 
    return this._http.get( url );
  }
  searchByFamily( query: String ): Observable<Family> {
    const url = `${ this._apiUrl }/family/name/${ query }`; 
    return this._http.get<Family>( url );
  }
}
