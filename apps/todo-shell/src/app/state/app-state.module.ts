import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppStateEffects } from './app-state.effects';
import { AngularAuthStoreModule, AuthStoreEffects } from '@angular/auth-store';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([
      AppStateEffects,
      AuthStoreEffects
    ]),
    AngularAuthStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class AppStateModule {}
