import { Injectable } from "@angular/core";
import { catchError, of, exhaustMap, map } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthApiService } from "@angular/auth-service";

import * as fromEffectsActions from './ngrx-auth.effects.actions';
import * as fromActions from './ngrx-auth.actions'

@Injectable()
export class AuthEffects {
  signinRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEffectsActions.signin),
      exhaustMap((action) =>
        this.authService.signin(action.signinRequest)
        .pipe(
          map((session: any) =>
            fromActions.signinSuccess({ session })
            ),
          catchError(error =>
            of(fromActions.signinFailure({ error }))
            )
        )
      )
    )
  )

  signupRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEffectsActions.singup),
      exhaustMap((action) =>
        this.authService.signup(action.signupRequest)
       .pipe(
        map((session: any) =>
          fromActions.singupSuccess({ session })
          ),
        catchError(error =>
          of(fromActions.singupFailure({ error }))
          )
        )
      )
    )
  )

  signoffRequest$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromEffectsActions.signoff),
    exhaustMap((action) =>
      this.authService.signoff(action.session)
     .pipe(
      map(fromActions.signoffSuccess),
      catchError(error =>
        of(fromActions.signoffFailure({ error }))
        )
      )
    )
  )
)

  constructor(
    private actions$: Actions,
    private authService: AuthApiService
  ) {}
}
