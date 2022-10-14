import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
