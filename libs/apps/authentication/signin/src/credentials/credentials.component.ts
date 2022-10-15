import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninRequest } from '@authentication-domain';

@Component({
  selector: 'todo-web-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
})
export class CredentialsComponent {
  signinForm: FormGroup;
  signinErrorMessages: string[] = []


  constructor(
    private formBuilder: FormBuilder) {
      this.signinForm = this.formBuilder.group({
        email: ['',
          Validators.required],
        password: ['',
          Validators.required],
      })
    }


  toggleTab(): void {
    //this.signIn = !this.signIn
  }

  getSigninErrorMessages(field: string): string[] {
    const errorMessages: string[] = []

    if (this.signinForm.get(field)?.errors) {
      Object.keys(this.signinForm.get(field)?.errors ?? {})
        .forEach((error: string) => {
          errorMessages[errorMessages.length] =
            this.getErrorMessage(this.signinForm, error)
      });
    }
    return errorMessages
  }

  signin(): void {
    let request: SigninRequest = {
      email: this.signinForm.get('email')?.value,
      password: this.signinForm.get('password')?.value,
    }

    this.signinForm.reset()
  }

  private getErrorMessage(form: FormGroup, error: string): string {
    switch (error) {
      case 'required':
        return 'This field is required'

      case 'minLength':
        return `This field requires at least { form.errors.minLength.requiredLength }`

      default:
        return 'There is a problem with this field'
    }
  }
}
