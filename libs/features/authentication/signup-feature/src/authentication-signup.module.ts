import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SignupRoutingModule } from './app-routing.module';
import { AuthenticationSignupComponent } from './authentication-signup.component';
import { CreateAccountModule } from './create-account/create-account.module';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    CreateAccountModule
  ],
  declarations: [
    AuthenticationSignupComponent
  ],
  bootstrap: [AuthenticationSignupComponent]
})
export class AuthenticationSignupModule {}
