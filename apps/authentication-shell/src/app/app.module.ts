import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationHeaderFeatureModule } from '@header-feature';
import { AngularAuthStoreModule } from '@data-store/angular/auth-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AuthenticationHeaderFeatureModule,
    AuthenticationModule,
    AppRoutingModule,
    AngularAuthStoreModule
  ],
  exports:[
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
