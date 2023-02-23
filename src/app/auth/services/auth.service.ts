import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseUrl: string = environment.apiUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor(private _http: HttpClient) {}

  login(email: string, password: string) {
    const url = `${this._baseUrl}/auth`;
    const body = { email, password };
    return this._http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          this.setUserData(resp.token!, resp.uid!, resp.username!);
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  validateToken() {
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('ctprn_token') || ''
    );

    return this._http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        this.setUserData(resp.token!, resp.uid!, resp.username!);
        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }

  setUserData(token: string, uid: string, username: string) {
    localStorage.setItem('ctprn_token', token!);

    this._user = {
      username: username!,
      uid: uid!,
    };
  }
}
