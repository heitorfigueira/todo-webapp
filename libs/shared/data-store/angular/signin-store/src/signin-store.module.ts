import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromState from '../src/state/signin-state.reducer';
import * as fromSelectors from '../src/state/signin-state.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromSelectors.SIGNIN_STATE_KEY,
      fromState.signinReducer
    ),
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class AngularSigninStoreModule {}

export * from './state/signin-state.effects';
export * from './state/signin-state.effects.actions';
export * from './state/signin-state.actions';
export * from './state/signin-state.selectors'
export * from './state/signin-state.models';
