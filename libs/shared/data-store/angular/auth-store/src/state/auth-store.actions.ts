import { createAction, props } from '@ngrx/store';

import { Session } from '@authentication-domain';

export enum AuthFeatureStateActions {
  AUTHENTICATION_RESET_SUCCESS = '[Authentication Store] Authentication Reset Success',
  AUTHENTICATION_RESET_FAILED = '[Authentication Store] Authentication Reset Failed',
  AUTHENTICATION_RECEIVED = '[Authentication Store] Authentication Received'
}
export const authenticationReceived =
  createAction(
    AuthFeatureStateActions.AUTHENTICATION_RECEIVED,
    props<{ session: Session }>());

export const authenticationResetFailed =
  createAction(
    AuthFeatureStateActions.AUTHENTICATION_RESET_FAILED,
    props<{ error: string }>());

export const authenticationResetSuccess =
  createAction(
    AuthFeatureStateActions.AUTHENTICATION_RESET_SUCCESS);
