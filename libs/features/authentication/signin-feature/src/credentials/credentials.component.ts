import { Component, OnInit } from '@angular/core';
import { SigninRequest } from '@authentication-domain';
import { ICentralFormTemplate, Field } from '@reactive-form';
import { Validators } from '@angular/forms';

@Component({
  selector: 'todo-web-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
})
export class CredentialsComponent implements OnInit {
  signinTemplate : ICentralFormTemplate;

  constructor() {
    this.signinTemplate = new SigninFormTemplate();
  }
  ngOnInit(): void {
    console.log('onInit credentials')
  }
}

export class SigninFormTemplate
  implements ICentralFormTemplate {
  private _title: string;
  private _subtitle: string;
  private _fields: Field[];

  constructor() {
    this._title = 'Signin'
    this._subtitle = 'Please inform your credentials to get access to the website.'
    this._fields = [
      {
        name: 'Email',
        valueField: 'email',
        controlConfig: {
          'email': [
            Validators.required
          ]
        }
      },
      {
        name: 'Password',
        valueField: 'password',
        controlConfig: {
          'password': [
            Validators.required
          ]
        }
      }
    ]
  }

  get title() { return this._title }
  get subtitle() { return this._subtitle }
  get fields() { return this._fields }
}
