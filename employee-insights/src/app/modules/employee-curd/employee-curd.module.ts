import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeCurdRoutingModule } from './employee-curd-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeCurdRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ToastrService]
})
export class EmployeeCurdModule { }
