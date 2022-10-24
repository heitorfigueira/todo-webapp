import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';

export const userManagementRoutes: Route[] = [
  {
    path: '',
    component: UserDetailsComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'permissions',
        component: UserPermissionsComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(userManagementRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserManagementRoutingModule {}
