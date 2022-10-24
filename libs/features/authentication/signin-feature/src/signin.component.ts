import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-web-authentication-signin',
  template: `<router-outlet></router-outlet>`,
})
export class SigninFeatureComponent implements OnInit {
  title = 'authentication-signin';

  ngOnInit(): void {
    console.log('onInit auth signin')
  }
}
