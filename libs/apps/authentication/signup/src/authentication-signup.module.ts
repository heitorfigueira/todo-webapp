import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SignupRoutingModule } from './app-routing.module';
import { AuthenticationSignupComponent } from './authentication-signup.component';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SignupRoutingModule
  ],
  declarations: [
    AuthenticationSignupComponent,
    CreateAccountComponent
  ],
  bootstrap: [AuthenticationSignupComponent]
})
export class AuthenticationSignupModule {}
