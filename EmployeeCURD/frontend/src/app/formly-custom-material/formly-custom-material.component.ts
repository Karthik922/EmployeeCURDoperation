import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formly-custom-material',
  templateUrl: './formly-custom-material.component.html',
  styleUrls: ['./formly-custom-material.component.css']
})
export class FormlyCustomMaterialComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService,
    private router: Router) { }
  
    form = new FormGroup({});
  
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            type: 'text',
              label: 'Name',
              placeholder: 'Name',
            required: true,
          },
          
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'Position',
          templateOptions: {
            label: 'Position',
            type: 'text',
            placeholder: 'Name',
            required: true,
          },
          
          
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'Salary',
          templateOptions: {
            label: 'Salry',
            type: 'text',
            placeholder: 'Salary',
            required: true,
          },
          
          
        },
      ],
    },
       
   
  ];

  submit() {
    alert(JSON.stringify(this.model));
    console.log(this.model);
  }
  ngOnInit(): void {
  }


}
