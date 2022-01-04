import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { EmployeeService} from 'src/app/service/employee.service';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee = new Employee();
  id: any;
  data: any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private toastr: ToastrService) { }


  form = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    salary: new FormControl('',)

  })
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getData();
  }

  getData(){
    this.employeeService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      this.form = new FormGroup({
        name: new FormControl(this.employee.name),
        position: new FormControl(this.employee.position),
        salary: new FormControl(this.employee.salary)

      })
    });
  }

  updateData(){
    this.employeeService.updateData(this.id,this.form.value).subscribe(res =>{
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code),'Updated Successfully',{
        timeOut: 4000,
        progressBar: true
      })
    })
  }

}
