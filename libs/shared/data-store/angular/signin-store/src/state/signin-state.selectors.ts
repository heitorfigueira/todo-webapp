import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SigninState } from "./signin-state.models";

export const SIGNIN_STATE_KEY = 'signin-store';

export const selectSigninState = createFeatureSelector<SigninState>(SIGNIN_STATE_KEY)

export const selectSigninError =
  createSelector(selectSigninState, (state) => state.signinError)
