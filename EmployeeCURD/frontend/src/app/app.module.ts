import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormlyComponentComponent } from './formly-component/formly-component.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormlyCustomMaterialComponent } from './formly-custom-material/formly-custom-material.component'
import { FormlyFieldCustomInput } from './formly/formly-field-custom-input';
import { MaterialExampleModule } from './material.module';

const appRoutes:Routes = [
  {
    path: '', component: EmployeeComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'edit/:id', component:EditEmployeeComponent
  },
  {
    path: 'add-formly', component:FormlyComponentComponent
  },
  {
    path: 'custom-formly', component:FormlyCustomMaterialComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    FormlyComponentComponent,
    FormlyCustomMaterialComponent,
    FormlyFieldCustomInput,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule,MatButtonModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
 FormlyModule.forRoot({ extras: { lazyRender: true },
  validationMessages: [
    { name: 'required', message: 'This field is required' },
  ],
  types: [
    { name: 'inno-input', component: FormlyFieldCustomInput,wrappers: ['form-field'] },
    
  ], }),
  FormlyBootstrapModule,MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
