import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const authenticationRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@todo-web/apps/authentication/signin')
      .then(m => m.AuthenticationSigninModule),
      pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@todo-web/apps/authentication/signup')
      .then(m => m.AuthenticationSignupModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AuthenticationRoutingModule {}
