import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { ReactiveFormModule } from '@reactive-form';
import { AngularSigninStoreModule, SigninStoreEffects } from '@angular/signin-store';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninFeatureComponent } from './signin.component';
import { CredentialsComponent } from './credentials/credentials.component';


@NgModule({
  declarations: [
    SigninFeatureComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormModule,
    AngularSigninStoreModule,
    EffectsModule.forFeature([
      SigninStoreEffects
    ])
  ]
})
export class SigninFeatureModule {}
