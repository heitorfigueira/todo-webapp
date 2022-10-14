import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AuthenticationModule),
  },
  {
    path: 'administration',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AdminModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/todo-lists/todo-lists.module')
      .then((m) => m.TodoListModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {}
