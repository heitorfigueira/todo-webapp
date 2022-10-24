import { Injectable } from "@angular/core";
import { catchError, of, tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as authActions from '@angular/auth-store'
import { RoutingService } from "../services/routing.service";

@Injectable()
export class AppStateEffects {

  userAuthenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.authenticationReceived),
      tap((authentication) => {
        this.routingService.navigate()
      })
    ),
    { dispatch: false }
  )
  constructor(
    private actions$: Actions,
    private routingService: RoutingService
  ) {}
}
