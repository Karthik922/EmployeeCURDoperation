import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
  <mat-form-field class="example-form-field" appearance="outline">
  
  <input matInput type="text" required>
  
  
</mat-form-field>


  

  `,
  styles: [`.example-full-width {
    width: 440px;
  }
  `]
})

export class FormlyFieldCustomInput extends FieldType {
  //  [fxFlex]="to.fxFlex"
  get type() {
    return this.to.type || 'text';
  }
}