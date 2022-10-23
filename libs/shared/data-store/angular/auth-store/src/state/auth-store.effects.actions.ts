import { createAction, props } from '@ngrx/store';

import { Session } from '@authentication-domain';

export enum AuthStateEffectsActions {
  AUTHENTICATION_RESET = '[Authentication Store] Authentication Reset',
}

export const authenticationReset =
  createAction(
    AuthStateEffectsActions.AUTHENTICATION_RESET,
    props<{ session: Session }>());


