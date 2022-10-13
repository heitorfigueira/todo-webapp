import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const authorizationRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('@todo-web/apps/authorization/signin')
      .then(m => m.AuthorizationSigninModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@todo-web/apps/authorization/signup')
      .then(m => m.AuthorizationSignupModule)
  },
  {
    path: '**',
    redirectTo: 'signin',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authorizationRoutes),
  ],
})
export class AuthorizationRoutingModule {}
