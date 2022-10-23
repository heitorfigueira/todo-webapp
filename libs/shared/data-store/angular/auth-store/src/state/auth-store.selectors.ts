import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth-store.models";

export const AUTH_STATE_KEY = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_STATE_KEY)

export const selectIsLogged =
  createSelector(selectAuthState, (state) => state.isLogged)

export const selectSession =
  createSelector(selectAuthState, (state) => state.session)

export const selectAuthError =
  createSelector(selectAuthState, (state) => state.authError)
