import { Component } from '@angular/core';

@Component({
  selector: 'todo-web-authentication-header',
  templateUrl: './authentication-header.component.html',
  styleUrls: ['./authentication-header.component.scss']
})
export class AuthenticationHeaderComponent {
  logout(): void {
    console.log('logout')
  }

  userLogged(): boolean {
    return true;
  }
}
