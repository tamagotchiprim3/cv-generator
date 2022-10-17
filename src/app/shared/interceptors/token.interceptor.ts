import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, tap } from 'rxjs';
import {
  decreaseSpinner,
  increaseSpinner,
} from 'src/app/store/app/app.actions';
import { AUTH_TOKEN } from '../constants/local-storage.const';
import { AUTH_PATH } from '../constants/routing-path.const';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(req));
  }

  public addAuthToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (!token) {
      this.router.navigate([AUTH_PATH.path]);
      return req;
    }
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
