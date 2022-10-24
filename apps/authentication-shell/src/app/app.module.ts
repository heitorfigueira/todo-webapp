import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderFeatureModule } from '@header-feature';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './state/app-state.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderFeatureModule,
    AuthenticationModule,
    AppRoutingModule,
    AppStateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
