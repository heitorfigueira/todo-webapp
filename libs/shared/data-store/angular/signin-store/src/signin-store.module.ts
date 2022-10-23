import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

export * from './state/signin-state.effects';
export * from './state/signin-state.effects.actions';
export * from './state/signin-state.actions';
export * from './state/signin-state.selectors'
export * from './state/signin-state.models';

import * as fromState from '../src/state/signin-state.reducer';
import * as fromSelectors from '../src/state/signin-state.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromSelectors.SIGNIN_PAGE_STATE_KEY,
      fromState.signinReducer
    ),
  ],
})
export class AngularSigninStoreModule {}
