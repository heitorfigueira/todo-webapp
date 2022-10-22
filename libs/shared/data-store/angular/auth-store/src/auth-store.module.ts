import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNgrx from './ngrx-state';

export * from './ngrx-state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNgrx.AUTH_STATE_KEY,
      fromNgrx.authReducer)
  ]
})

export class AngularAuthStoreModule {}
