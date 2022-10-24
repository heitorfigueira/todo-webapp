import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectIsLogged, selectSession } from '@angular/auth-store';
import * as AuthStateActions from '@angular/auth-store'

@Component({
  selector: 'todo-web-authentication-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderFeatureComponent {
  userIsLogged$ = this.store.select(selectIsLogged);
  session$ = this.store.select(selectSession);

  constructor(private store: Store) {
  }
  logout(): void {
    this.session$.subscribe((session) => {
      if (session != undefined)
        this.store.dispatch(AuthStateActions.authenticationReset({ session }))
    })
  }
}
