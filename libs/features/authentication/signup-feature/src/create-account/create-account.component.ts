import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupRequest } from '@authentication-domain';

@Component({
  selector: 'todo-web-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  signupForm: FormGroup
  signupErrorMessages: string[] = []


  constructor(
    private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['',
        Validators.required],
      email: ['',
        Validators.required],
      password: ['',
        Validators.required]
    })
   }


  toggleTab(): void {
    //this.signIn = !this.signIn
  }

  getSignupErrorMessages(field: string): string[] {
    const errorMessages: string[] = []
    if (this.signupForm.get(field)?.errors)
      Object.keys(
        this.signupForm?.get(field)?.errors ?? {})
        .forEach((error: string) => {
          errorMessages[errorMessages.length] =
            this.getErrorMessage(this.signupForm, error)
      });

    return errorMessages
  }

  signup(): void {
    let request: SignupRequest = {
      name: this.signupForm.get('name')?.value,
      password: this.signupForm.get('password')?.value,
      email: this.signupForm.get('email')?.value,
    }
    this.toggleTab()
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
