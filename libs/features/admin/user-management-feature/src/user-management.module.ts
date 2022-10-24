import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [
    UserDetailsComponent,
    UserPermissionsComponent
  ],
})
export class UserManagementFeatureModule {}
