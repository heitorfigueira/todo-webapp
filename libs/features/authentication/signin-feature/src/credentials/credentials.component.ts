import { Component } from '@angular/core';
import { ICentralFormTemplate } from '@reactive-form';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';


import * as SigninPageActions from '@angular/signin-store'

import { SigninFormTemplate } from './form-template';
import { SigninRequest } from '@authentication-domain';

@Component({
  selector: 'todo-web-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
})
export class CredentialsComponent {
  signinTemplate : ICentralFormTemplate;

  constructor(
    private store: Store) {
    this.signinTemplate = new SigninFormTemplate();
  }

  signin(signinForm: FormGroup): void {
    const signinRequest: SigninRequest = {
      email: signinForm.value['email'],
      password: signinForm.value['password']
    }

    this.store.dispatch(SigninPageActions.signin({ signinRequest }))
  }
}
