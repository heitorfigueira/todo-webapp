import { Validators } from "@angular/forms";

import { Field, ICentralFormTemplate } from "@reactive-form";

export class SigninFormTemplate
  implements ICentralFormTemplate {
  private _title: string;
  private _subtitle: string;
  private _fields: Field[];

  constructor() {
    this._title = 'Signin'
    this._subtitle = 'Please inform your credentials to access the website.'
    this._fields = [
      {
        name: 'Email',
        valueField: 'email',
        icon: 'mail',
        controlConfig: [
          Validators.required,
          Validators.pattern(/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)
        ]
      },
      {
        name: 'Password',
        valueField: 'password',
        enableVisibility: {
          hide: true
        },
        controlConfig: [
          Validators.required
        ]
      }
    ]
  }

  get title() { return this._title }
  get subtitle() { return this._subtitle }
  get fields() { return this._fields }
}
