import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './app.component';
import { TodoRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    TodoRoutingModule
  ],
  bootstrap: [
    TodoComponent
  ],
})
export class TodoModule {}
