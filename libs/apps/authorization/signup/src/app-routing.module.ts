import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';

export const authorizationSignupRoutes: Route[] = [
  {
    path: '',
    component: CreateAccountComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authorizationSignupRoutes)]
})
export class SignupRoutingModule {}
