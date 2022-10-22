import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../models/auth.models";

export const AUTH_STATE_KEY = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_STATE_KEY)

export const selectSession =
  createSelector(selectAuthState, (state) => state.session)
