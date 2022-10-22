import { createAction, props } from '@ngrx/store';

import { Session, SigninRequest, SignupRequest } from '@authentication-domain';

export enum AuthStateEffectsActions {
  SIGNIN = '[Auth Store] Signin Request',
  SIGNOFF = '[Auth Store] Signoff Request',
  SIGNUP = '[Auth Store] Signup Request',
}

export const signin =
  createAction(
    AuthStateEffectsActions.SIGNIN,
    props<{ signinRequest: SigninRequest }>());

export const singup =
  createAction(
    AuthStateEffectsActions.SIGNUP,
    props<{ signupRequest: SignupRequest }>());

export const signoff =
  createAction(
    AuthStateEffectsActions.SIGNOFF,
    props<{ session: Session }>());
