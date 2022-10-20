import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthApiService } from '@services/angular/auth-service';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(
    //   fromNgrx.AUTH_FEATURE_KEY,
    //   fromNgrx.authReducer),
    // EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    // AuthFacade,
    AuthApiService
  ]
})
export class AngularAuthStoreModule {}
