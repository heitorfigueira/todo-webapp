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

    console.log(this.template)

    this.template?.fields.forEach((f) => {
      groupBuilder[f.name.toLowerCase()] = [null, f.controlConfig]
    });

    this.form =
      this.formBuilder?.group(groupBuilder)
  }

  log(fieldHide?: boolean) {
    console.log(fieldHide)
  }

  submit(): void {
    console.log(this.form)
    this.submitEvent.emit(this.form);
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
