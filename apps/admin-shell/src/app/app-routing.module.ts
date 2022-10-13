import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserControlComponent } from './user-control/user-control.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: UserControlComponent,
        },
      ],
    ),
  ],
})
export class AdminRoutingModule {}
