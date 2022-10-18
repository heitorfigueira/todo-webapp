import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateAccountComponent } from './create-account.component';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [CreateAccountComponent],
  exports: [CreateAccountComponent]
})
export class CreateAccountModule {}
