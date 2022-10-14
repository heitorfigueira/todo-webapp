import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthenticationComponent } from './app.component';
import { AuthenticationRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    BrowserModule,
    AuthenticationRoutingModule
  ],
  bootstrap: [AuthenticationComponent],
  exports: [AuthenticationComponent]
})
export class AppModule {}
