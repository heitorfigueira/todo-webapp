import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApiService } from '@services/angular/auth-service';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(
    //   fromAuthStore.AUTH_STORE_FEATURE_KEY,
    //   fromAuthStore.authStoreReducer
    // ),
    // EffectsModule.forFeature([AuthStoreEffects]),
  ],
  providers: [
    AuthApiService,
    //AuthStoreFacade
  ],
})
export class NgrxStateModule {}
