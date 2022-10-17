import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { AUTH_PATH } from '../constants/routing-path.const';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ExpiresInTimeInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuthentificated() && this.authService.isExpired()) {
      this.router.navigate([AUTH_PATH.path]);
      localStorage.clear();
      return EMPTY;
    }
    return next.handle(req);
  }
}
