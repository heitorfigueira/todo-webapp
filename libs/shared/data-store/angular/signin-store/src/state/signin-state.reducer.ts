import { createReducer, on } from '@ngrx/store';
import { initialState } from './signin-state.models';

import * as fromActions from './signin-state.actions';

export const signinReducer = createReducer(
  initialState,
  on(fromActions.signinFailure, (state, { error }) => {
    return {
      ...state,
      signinError: error
      }
  }),

  on(fromActions.forgotPasswordFailure, (state, { error }) => {
    return {
      ...state,
      signinError: error
      }
  }),
)
