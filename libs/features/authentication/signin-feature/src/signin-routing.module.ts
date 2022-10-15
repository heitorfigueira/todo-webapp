import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CredentialsComponent } from './credentials/credentials.component';

const authenticationSigninRoutes: Route[] = [
  {
    path: '',
    component: CredentialsComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationSigninRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class SigninRoutingModule {}
