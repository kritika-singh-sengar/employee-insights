import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeCurdRoutingModule } from './employee-curd-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeCurdRoutingModule
  ]
})
export class EmployeeCurdModule { }
