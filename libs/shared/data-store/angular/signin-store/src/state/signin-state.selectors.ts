import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SigninState } from "./signin-state.models";

export const SIGNIN_PAGE_STATE_KEY = 'signin-page';

export const selectAuthState = createFeatureSelector<SigninState>(SIGNIN_PAGE_STATE_KEY)

export const selectAuthError =
  createSelector(selectAuthState, (state) => state.signinError)
