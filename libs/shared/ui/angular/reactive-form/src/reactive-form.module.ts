import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CentralFormComponent } from './central-form/central-form.component';

@NgModule({
  declarations: [
    CentralFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    CentralFormComponent
  ],
})
export class ReactiveFormModule {}
