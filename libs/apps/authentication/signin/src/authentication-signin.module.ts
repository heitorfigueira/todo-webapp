import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninRoutingModule } from './app-routing.module';
import { AuthenticationSigninComponent } from './authentication-signin.component';

@NgModule({
  declarations: [AuthenticationSigninComponent],
  imports: [
    CommonModule,
    RouterModule,
    SigninRoutingModule,
  ],
  bootstrap: [AuthenticationSigninComponent]
})
export class AuthenticationSigninModule {}
