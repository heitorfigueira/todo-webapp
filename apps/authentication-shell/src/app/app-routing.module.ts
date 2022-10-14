import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const authenticationRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('@todo-web/apps/authentication/signin')
      .then(m => m.AuthenticationSigninModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@todo-web/apps/authentication/signup')
      .then(m => m.AuthenticationSignupModule)
  },
  {
    path: '**',
    redirectTo: 'signin',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authenticationRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AuthenticationRoutingModule {}
