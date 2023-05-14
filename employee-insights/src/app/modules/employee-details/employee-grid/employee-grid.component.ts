import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, SelectionChangedEvent } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { DEFAULT_COL_DEFS, EMPLOYEE_INSIGHTS_COL_DEFS } from 'src/app/shared/constants/col-defs.constant';
import { EMPLOYEE } from 'src/app/shared/models/employee.model';
import { EmployeeCurdService } from '../../employee-curd/employee-curd.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss']
})
export class EmployeeGridComponent implements OnInit {

  public readonly context: any;
  public employeeInsightsColumnDefs: ColDef[] = EMPLOYEE_INSIGHTS_COL_DEFS;
  public defaultColDefs = DEFAULT_COL_DEFS;
  public rowData: string[] = [];
  public selectedEmployeeDetails: EMPLOYEE[] = [];
  public empoloyeeId: number = -1;

  constructor(
    private router: Router,
    private curdService: EmployeeCurdService,
    private gridApi: GridApi,
    private toastr: ToastrService) {
    this.context = { componentParent: this };
  }

  ngOnInit(): void {
    this.curdService.getAllEmployee().subscribe((result: string[]) => {
      this.rowData = result;
    });
  }

  getSelectedRowValue(event: SelectionChangedEvent) {
    this.selectedEmployeeDetails = this.gridApi.getSelectedRows();
    console.log(this.selectedEmployeeDetails);
    //return this.selectedEmployeeDetails;
  }

  onGridReady(params: { api: GridApi<any>; }) {
    this.gridApi = params.api;
  }

  deleteSelectedEmployeeDetails(): void {
    this.curdService.deleteEmployee(this.empoloyeeId).subscribe((response) => {
      this.toastr.success("Employee details deleted successfully!!")
      console.log(response);
    });
  }

  editSelectedEmployeeDetails(): void {
    this.router.navigate([`/employee-curd/update-employee/${this.empoloyeeId}`]);
  }

}
