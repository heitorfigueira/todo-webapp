import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularSigninStoreModule, SigninStoreEffects } from '@angular/signin-store';

import * as fromAuthState from './state/auth-store.reducer';
import * as fromSelectors from './state/auth-store.selectors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromSelectors.AUTH_STATE_KEY,
      fromAuthState.authReducer),
    AngularSigninStoreModule,
    EffectsModule.forFeature([
        SigninStoreEffects
      ]),
    HttpClientModule
  ],
  exports: [
    AngularSigninStoreModule,
    HttpClientModule
  ]
})

export class AngularAuthStoreModule {}

export * from './state/auth-store.effects';
export * from './state/auth-store.effects.actions';
export * from './state/auth-store.actions';
export * from './state/auth-store.selectors';
export * from './state/auth-store.models';
