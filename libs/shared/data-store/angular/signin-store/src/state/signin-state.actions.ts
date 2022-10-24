import { createAction, props } from '@ngrx/store';

import { Session } from '@authentication-domain';

export enum SigninStoreActions {
  SIGNIN_FAILURE = '[Signin Page] Signin Failure',
  SIGNIN_SUCCESS = '[Signin Page] Signin Success',
  FORGOT_PASSWORD_FAILURE = '[Signin Page] Forgot Password Failure',
  FORGOT_PASSWORD_SUCCESS = '[Signin Page] Forgot Password Success',
}

export const signinFailure =
  createAction(
    SigninStoreActions.SIGNIN_FAILURE,
    props<{ error: string }>());

export const signinSuccess =
  createAction(
    SigninStoreActions.SIGNIN_SUCCESS,
    props<{ session: Session }>());

export const forgotPasswordFailure =
  createAction(
    SigninStoreActions.SIGNIN_FAILURE,
    props<{ error: string }>());

export const forgotPasswordSuccess =
  createAction(
    SigninStoreActions.SIGNIN_SUCCESS,
    props<{ session: Session }>());
