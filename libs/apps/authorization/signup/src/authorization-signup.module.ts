import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SignupRoutingModule } from './app-routing.module';
import { AuthorizationSignupComponent } from './authorization-signup.component';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SignupRoutingModule
  ],
  declarations: [
    AuthorizationSignupComponent,
    CreateAccountComponent
  ],
  bootstrap: [AuthorizationSignupComponent]
})
export class AuthorizationSignupModule {}
