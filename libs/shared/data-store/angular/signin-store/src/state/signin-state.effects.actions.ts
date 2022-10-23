import { createAction, props } from '@ngrx/store';

import { Session, SigninRequest } from '@authentication-domain';


export enum SigninPageEffectsActions {
  SIGNIN = '[Signin Page] Signin Request',
  FORGOT_PASSWORD = '[Signin Page] Forgot Password Request',
}

export const signin =
  createAction(
    SigninPageEffectsActions.SIGNIN,
    props<{ signinRequest: SigninRequest }>());

export const forgotPassword =
  createAction(
    SigninPageEffectsActions.FORGOT_PASSWORD,
    props<{ session: Session }>());
