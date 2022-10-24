import { createAction, props } from '@ngrx/store';

import { Session, SigninRequest } from '@authentication-domain';


export enum SigninStoreEffectsActions {
  SIGNIN = '[Signin Page] Signin Request',
  FORGOT_PASSWORD = '[Signin Page] Forgot Password Request',
}

export const signin =
  createAction(
    SigninStoreEffectsActions.SIGNIN,
    props<{ signinRequest: SigninRequest }>());

export const forgotPassword =
  createAction(
    SigninStoreEffectsActions.FORGOT_PASSWORD,
    props<{ session: Session }>());
