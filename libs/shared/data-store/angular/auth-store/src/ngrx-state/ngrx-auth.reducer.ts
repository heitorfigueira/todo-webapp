import { createReducer, on } from '@ngrx/store';
import { initialState } from '../models/auth.models';

import * as fromActions from './ngrx-auth.actions';

export const authReducer = createReducer(
  initialState,
  on(fromActions.signinSuccess, (state, { session }) => {
    return {
      ...state,
      session: session,
      isLogged: true
      }
  }),
  on(fromActions.singupSuccess, (state, { session }) => {
    return {
      ...state,
      session: session,
      isLogged: true
      }
  }),
  on(fromActions.signoffSuccess, _ => {
    return {
      ...initialState
      }
  })
)
