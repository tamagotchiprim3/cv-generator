import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_TOKEN, EXPIRES_TOKEN } from '../constants/local-storage.const';
import { AUTH_PATH } from '../constants/routing-path.const';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem(AUTH_TOKEN) &&
      localStorage.getItem(EXPIRES_TOKEN)
    ) {
      return true;
    } else {
      this.router.navigate([AUTH_PATH.path]);
      return false;
    }
  }
}
