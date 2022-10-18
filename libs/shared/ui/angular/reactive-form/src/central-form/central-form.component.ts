import { Component, EventEmitter, Input, Output, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICentralFormTemplate } from './data-transfer/central-form-input';


@Component({
  selector: 'todo-web-central-form',
  templateUrl: './central-form.component.html',
  styleUrls: ['./central-form.component.scss'],
})
export class CentralFormComponent implements OnInit {
  @Input() template!: ICentralFormTemplate;

   @Output() submitEvent:
     EventEmitter<FormGroup> = new EventEmitter();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('central form')
    this.form =
      this.formBuilder?.group(
        this.template?.fields
        .map((f) => f.controlConfig))
  }

  submit(): void {
    console.log('submit')
  }
  getErrorMessages(field: string): string[] {
    const errorMessages: string[] = []
    if (this.form.get(field)?.errors)
      Object.keys(this.form.get(field)?.errors ?? {})
        .forEach((error: string) => {
          errorMessages[errorMessages.length] =
            this.getErrorMessage(this.form, error)
      });

    return errorMessages
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
