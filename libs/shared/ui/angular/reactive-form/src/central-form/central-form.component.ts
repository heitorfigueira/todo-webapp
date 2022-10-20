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
    let groupBuilder: any = {}

    this.template?.fields.forEach((f) => {
      groupBuilder[f.name.toLowerCase()] = [null, f.controlConfig]
    });

    this.form =
      this.formBuilder?.group(groupBuilder)
  }

  submit(): void {
    this.submitEvent.emit(this.form);
  }
  getErrorMessages(fieldName: string): string[] {
    const errorMessages: string[] = []
    if (this.form.controls[fieldName.toLowerCase()]?.errors)
      Object.keys(this.form.controls[fieldName.toLowerCase()]?.errors ?? {})
        .forEach((error: string) => {
          errorMessages[errorMessages.length] =
            this.getErrorMessage(this.form, error, fieldName)
      });

    return errorMessages
  }

  fieldIsInvalid(fieldName: string): boolean {
    return this.form.controls[fieldName.toLowerCase()]?.touched &&
           this.form.controls[fieldName.toLowerCase()]?.invalid
  }

  private getErrorMessage(form: FormGroup, error: string, fieldName: string): string {
    switch (error) {
      case 'required':
        return 'The ' + fieldName + ' field is required'

      case 'pattern':
        return 'This is not a valid ' + fieldName

      case 'minLength':
        return `The `+ fieldName + ` requires at least { form.errors.minLength.requiredLength }`

      default:
        return 'Something is wrong here'
    }
  }
}
