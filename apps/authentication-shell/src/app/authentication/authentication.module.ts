import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { AngularAuthStoreModule, AuthStoreEffects } from '@angular/auth-store';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularAuthStoreModule,
    EffectsModule.forFeature([
      AuthStoreEffects
    ])
  ],
})
export class AuthenticationModule {}
