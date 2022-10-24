import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: '',
          redirectTo: 'user-management',
          pathMatch: 'full'
        },
        {
          path: 'user-management',
          loadChildren: () =>
            import('@user-management-feature')
            .then(m => m.UserManagementFeatureModule),
            pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: 'user-management',
          pathMatch: 'full'
        },
      ],
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
