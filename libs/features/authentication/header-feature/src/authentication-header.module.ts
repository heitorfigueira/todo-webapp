import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AuthenticationHeaderComponent } from './authentication-header.component';

@NgModule({
  declarations: [
    AuthenticationHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[AuthenticationHeaderComponent]
})
export class AuthenticationHeaderFeatureModule {}
