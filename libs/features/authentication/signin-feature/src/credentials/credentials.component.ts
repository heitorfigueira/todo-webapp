import { Component } from '@angular/core';
import { ICentralFormTemplate } from '@reactive-form';
import { FormGroup } from '@angular/forms';


import { SigninFormTemplate } from './form-template';
import { SigninRequest } from '@authentication-domain';
import { Store } from '@ngrx/store';
import * as AuthStateActions from '@angular/auth-store'

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

    this.store.dispatch(
      AuthStateActions.signin({ signinRequest }))
  }
}
