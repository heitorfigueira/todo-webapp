import { Component } from '@angular/core';

@Component({
  selector: 'todo-web-root',
  template: `<router-outlet></router-outlet>`,
})
export class AdminComponent {
  title = 'admin-shell';
}
