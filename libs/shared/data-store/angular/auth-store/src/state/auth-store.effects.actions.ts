import { createAction, props } from '@ngrx/store';

import { Session } from '@authentication-domain';

export enum AuthStoreEffectsActions {
  AUTHENTICATION_RESET = '[Authentication Store] Authentication Reset',
}

export const authenticationReset =
  createAction(
    AuthStoreEffectsActions.AUTHENTICATION_RESET,
    props<{ session: Session }>());


