import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { AuthenticationHeaderComponent } from './authentication-header.component';
import { AngularAuthStoreModule, AuthStoreEffects } from '@angular/auth-store';

@NgModule({
  declarations: [
    AuthenticationHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    AngularAuthStoreModule,
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  exports:[
    AuthenticationHeaderComponent
  ]
})
export class AuthenticationHeaderFeatureModule {}
