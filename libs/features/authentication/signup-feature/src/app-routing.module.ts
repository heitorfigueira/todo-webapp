import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CreateAccountModule } from './create-account/create-account.module';

export const authenticationSignupRoutes: Route[] = [
  {
    path: '',
    component: CreateAccountModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationSignupRoutes)
  ],
  exports: [RouterModule]
})
export class SignupRoutingModule {}
