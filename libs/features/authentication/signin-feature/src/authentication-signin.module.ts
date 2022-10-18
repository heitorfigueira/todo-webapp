import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { AuthenticationSigninComponent } from './authentication-signin.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ReactiveFormModule } from '@reactive-form';

@NgModule({
  declarations: [
    AuthenticationSigninComponent,
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormModule
  ],
})
export class AuthenticationSigninModule {}
