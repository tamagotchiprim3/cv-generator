import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { loginAction, loginActionSuccessed } from './auth.actions';

@Injectable()
export class AuthEffect {
  public loadProjects$ = createEffect(() => {
    return this.actions.pipe(
      ofType(loginAction),
      mergeMap((action) =>
        this.authService.authPostData(action.data).pipe(
          map((data) => {
            localStorage.setItem('name', `${data.firstName} ${data.lastName}`);
            return loginActionSuccessed({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(private actions: Actions, private authService: AuthService) {}
}
