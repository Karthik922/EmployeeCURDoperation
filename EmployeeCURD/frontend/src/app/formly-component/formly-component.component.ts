import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Contact } from 'src/app/model/contact.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formly-component',
  templateUrl: './formly-component.component.html',
  styleUrls: ['./formly-component.component.css']
})
export class FormlyComponentComponent implements OnInit {

  contactForm: FormGroup;
  contactModel: Contact;
  contactFields: Array<FormlyFieldConfig>
  data: any;
  constructor(private employeeService: EmployeeService, private toastr: ToastrService,
    private router: Router){
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields();
  }

submitForm(contact: Contact){
  //console.log(contact);
  this.employeeService.insertData(contact).subscribe(res =>{
    this.data = res;
    this.toastr.success(JSON.stringify(this.data.code),JSON.stringify('Successfully Addeddd...'),{
      timeOut:3000,
      progressBar: true
    });
    this.router.navigateByUrl('/')
  });
}

  ngOnInit(): void {
  }

}
