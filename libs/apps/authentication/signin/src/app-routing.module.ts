import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CredentialsComponent } from './credentials/credentials.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authenticationSigninRoutes: Route[] = [
  {
    path: '',
    component: CredentialsComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationSigninRoutes),
  ],
})
export class SigninRoutingModule {}
