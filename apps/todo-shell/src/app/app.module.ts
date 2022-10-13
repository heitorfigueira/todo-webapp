import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './app.component';
import { TodoRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [BrowserModule, TodoRoutingModule, RouterModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class TodoModule {}
