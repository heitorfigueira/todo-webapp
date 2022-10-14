import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild(
      [
        {
          path: '',
          //component: UserControlComponent,
          pathMatch: 'full'
        },
      ],
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
