import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TodoComponent } from './app.component';
import { TodoRoutingModule } from './app-routing.module';
import { RoutingService } from './services/routing.service';
import { AppStateModule } from './state/app-state.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TodoRoutingModule,
    AppStateModule,
    HttpClientModule,
  ],
  exports:[
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [
    TodoComponent
  ],
  providers: [
    RoutingService,
  ]
})
export class TodoModule {}
