import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationHeaderFeatureModule } from '@header-feature';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './state/state.module';

import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AuthenticationHeaderFeatureModule,
    AuthenticationModule,
    AppRoutingModule,
    AppStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
