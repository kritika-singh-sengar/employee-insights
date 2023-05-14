import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridApi, ICellRendererParams } from 'ag-grid-community';
import { EmployeeCurdService } from 'src/app/modules/employee-curd/employee-curd.service';
import { EMPLOYEE } from '../../models/employee.model';

@Component({
  selector: 'action-custom-cell-render',
  template: `<span class="action-container cursor-pointer">
      <span class="icon-pencil" title="edit">
        <button type="button" (click)="editSelectedEmployeeDetails()">          
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </span>
      <span class="icon-delete" title="delete">
        <button type="button" (click)="deleteSelectedEmployeeDetails()">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </span>
    </span>`,
  styles: [`
    .action-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    `],
})
export class ActionCustomCellRenderer implements ICellRendererAngularComp {

  public params!: ICellRendererParams;

  constructor(private _curdService: EmployeeCurdService,
    private router: Router,
    private gridApi: GridApi) { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  deleteSelectedEmployeeDetails(): void {
    this.params.context.componentParent.empoloyeeId = this.params.data.id;
    this.params.context.componentParent.deleteSelectedEmployeeDetails();
  }

  editSelectedEmployeeDetails(): void {
    this.params.context.componentParent.empoloyeeId = this.params.data.id;
    this.params.context.componentParent.editSelectedEmployeeDetails();
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}