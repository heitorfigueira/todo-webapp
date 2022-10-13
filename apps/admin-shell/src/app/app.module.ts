import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './app.component';
import { AdminRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
