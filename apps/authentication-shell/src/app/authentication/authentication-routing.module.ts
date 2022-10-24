import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const authenticationRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@signin-feature')
      .then(m => m.SigninFeatureModule),
      pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@signup-feature')
      .then(m => m.AuthenticationSignupModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AuthenticationRoutingModule {}
