import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth-store.models';

import * as fromActions from './auth-store.actions';

export const authReducer = createReducer(
  initialState,
  on(fromActions.authenticationResetFailed, (state, { error }) => {
    return {
      ...state,
      authError: error
      }
  }),
  on(fromActions.authenticationResetSuccess, _ => {
    return {
      ...initialState
      }
  }),
  on(fromActions.authenticationReceived, (state, { session }) => {
    return {
      ...state,
      session: session,
      isLogged: true
      }
  }),
)
