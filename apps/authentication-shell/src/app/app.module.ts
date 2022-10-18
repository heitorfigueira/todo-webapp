import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationHeaderFeatureModule } from '@header-feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AuthenticationHeaderFeatureModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  exports:[
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
