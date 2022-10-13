import { NgModule } from '@angular/core';

import { AuthorizationComponent } from './app.component';
import { AuthorizationRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AuthorizationRoutingModule
  ],
  providers: [],
  bootstrap: [AuthorizationComponent],
})
export class AuthorizationModule {}
