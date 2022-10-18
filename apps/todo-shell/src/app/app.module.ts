import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TodoComponent } from './app.component';
import { TodoRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TodoRoutingModule
  ],
  exports:[
    BrowserAnimationsModule
  ],
  bootstrap: [
    TodoComponent
  ],
})
export class TodoModule {}
