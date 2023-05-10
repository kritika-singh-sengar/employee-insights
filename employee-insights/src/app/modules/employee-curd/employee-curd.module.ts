import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeCurdRoutingModule } from './employee-curd-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeCurdRoutingModule
  ]
})
export class EmployeeCurdModule { }
