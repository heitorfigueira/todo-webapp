import { createAction, props } from '@ngrx/store';

import { Session } from '@authentication-domain';

export enum AuthStateActions {
  SIGNIN_FAILURE = '[Auth Store] Signin Failure',
  SIGNIN_SUCCESS = '[Auth Store] Signin Success',
  SIGNOFF_FAILURE = '[Auth Store] Signoff Failure',
  SIGNOFF_SUCCESS = '[Auth Store] Signoff Success',
  SIGNUP_FAILURE = '[Auth Store] Signup Failure',
  SIGNUP_SUCCESS = '[Auth Store] Signup Success',
}

export const signinFailure =
  createAction(AuthStateActions.SIGNIN_FAILURE,
  props<{ error: string }>());

export const signinSuccess =
  createAction(
    AuthStateActions.SIGNIN_SUCCESS,
    props<{ session: Session }>());

export const singupFailure =
  createAction(
    AuthStateActions.SIGNUP_FAILURE,
    props<{ error: string }>());

export const singupSuccess =
  createAction(
    AuthStateActions.SIGNUP_SUCCESS,
    props<{ session: Session }>());

export const signoffFailure =
  createAction(
    AuthStateActions.SIGNOFF_FAILURE,
    props<{ error: string }>());

export const signoffSuccess =
  createAction(AuthStateActions.SIGNOFF_SUCCESS);
