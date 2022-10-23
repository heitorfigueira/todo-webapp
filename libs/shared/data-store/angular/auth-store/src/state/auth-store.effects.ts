import { Injectable } from "@angular/core";
import { catchError, of, exhaustMap, map, tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthApiService } from "@angular/auth-service";

import * as fromEffectsActions from './auth-store.effects.actions';
import * as fromActions from './auth-store.actions'

import * as fromSigninActions from '@angular/signin-store'

@Injectable()
export class AuthStoreEffects {
  authenticationReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEffectsActions.authenticationReset),
      exhaustMap((action) =>
        this.authService.signoff(action.session)
      .pipe(
        map(fromActions.authenticationResetSuccess),
        catchError(error =>
          of(fromActions.authenticationResetFailed({ error }))
          )
        )
      )
    )
  )

  authenticationReceived$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromSigninActions.signinSuccess),
      map((action) =>
        fromActions.authenticationReceived({ session: action.session }),
        catchError(error => of(console.log(error)))
      )
    )
  )
  constructor(
    private actions$: Actions,
    private authService: AuthApiService
  ) {}
}
