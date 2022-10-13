import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () =>
            loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4202/remoteEntry.js',
              exposedModule: './Module',
            }).then((m) => m.AuthorizationModule),
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
          loadChildren: () =>
            loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Module',
            }).then((m) => m.AuthorizationModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ]
})
export class TodoRoutingModule {}
