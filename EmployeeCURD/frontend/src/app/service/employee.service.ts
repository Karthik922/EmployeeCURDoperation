import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://localhost:3000/employees')
  }

  insertData(data:any){
    return this.httpClient.post('http://localhost:3000/employees',data);
 
  }

  getDataById(id: any){
    return this.httpClient.get('http://localhost:3000/employees/'+id);
  }

  updateData(id:any, data:any){
    return this.httpClient.put('http://localhost:3000/employees/'+id,data);
  }


  deleteData(id: any){
    return this.httpClient.delete('http://localhost:3000/employees/'+id);
  }


}
