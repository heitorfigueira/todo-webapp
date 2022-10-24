import { Injectable } from "@angular/core";
import { catchError, of, exhaustMap, map } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthApiService } from "@angular/auth-service";

import * as fromEffectsActions from './signin-state.effects.actions';
import * as fromActions from './signin-state.actions';

@Injectable()
export class SigninStoreEffects {
  signin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEffectsActions.signin),
      exhaustMap((action) => {
        return this.authService.signin(action.signinRequest)
        .pipe(
          map((session: any) => {
            return fromActions.signinSuccess({ session })
          }),
          catchError(error => of(fromActions.signinFailure({ error })))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthApiService
  ) {}
}
