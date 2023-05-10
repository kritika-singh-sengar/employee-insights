import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';


@NgModule({
  declarations: [
    EmployeeGridComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule { }
