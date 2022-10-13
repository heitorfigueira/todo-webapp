import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninRoutingModule } from './app-routing.module';
import { AuthorizationSigninComponent } from './authorization-signin.component';

@NgModule({
  declarations: [AuthorizationSigninComponent],
  imports: [
    CommonModule,
    RouterModule,
    SigninRoutingModule,
  ],
  bootstrap: [AuthorizationSigninComponent]
})
export class AuthorizationSigninModule {}
