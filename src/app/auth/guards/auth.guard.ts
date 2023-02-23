import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _authService: AuthService, private _router: Router) {}

  canLoad(): Observable<boolean> | boolean {
    return this._authService.validateToken().pipe(
      tap((valid) => {
        if (!valid) {
          this._router.navigateByUrl('/auth');
        }
      })
    );
  }
  canActivate(): Observable<boolean> | boolean {
    return this._authService.validateToken().pipe(
      tap((valid) => {
        if (!valid) {
          this._router.navigateByUrl('/auth');
        }
      })
    );
  }
}
