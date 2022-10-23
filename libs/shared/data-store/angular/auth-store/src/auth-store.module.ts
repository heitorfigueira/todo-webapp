import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularSigninStoreModule, SigninPageEffects } from '@angular/signin-store';

import * as fromAuthState from './state/auth-store.reducer';
import * as fromSelectors from './state/auth-store.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromSelectors.AUTH_STATE_KEY,
      fromAuthState.authReducer),
    AngularSigninStoreModule,
    EffectsModule.forFeature([
        SigninPageEffects
      ])
  ],
  exports: [
    AngularSigninStoreModule
  ]
})

export class AngularAuthStoreModule {}

export * from './state/auth-store.effects';
export * from './state/auth-store.effects.actions';
export * from './state/auth-store.actions';
export * from './state/auth-store.selectors';
export * from './state/auth-store.models';
