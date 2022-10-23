import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { ReactiveFormModule } from '@reactive-form';
import { AngularSigninStoreModule, SigninPageEffects } from '@angular/signin-store';

import { SigninRoutingModule } from './signin-routing.module';
import { AuthenticationSigninComponent } from './authentication-signin.component';
import { CredentialsComponent } from './credentials/credentials.component';


@NgModule({
  declarations: [
    AuthenticationSigninComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormModule,
    AngularSigninStoreModule,
    EffectsModule.forFeature([
      SigninPageEffects
    ])
  ]
})
export class AuthenticationSigninModule {}
