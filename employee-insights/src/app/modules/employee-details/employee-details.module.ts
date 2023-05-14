import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { MatTabsModule } from "@angular/material/tabs";
import { GridApi } from 'ag-grid-community';

@NgModule({
  declarations: [
    EmployeeGridComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    MatTabsModule,
    AgGridModule
  ],
  providers: [GridApi]
})
export class EmployeeDetailsModule { }
