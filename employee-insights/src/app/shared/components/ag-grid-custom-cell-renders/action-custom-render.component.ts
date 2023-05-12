import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'action-custom-cell-render',
    template: ``,
    styles: [``],
})
export class FooterComponent implements ICellRendererAngularComp {

    constructor() { }
    agInit(params: ICellRendererParams<any, any, any>): void {
        throw new Error('Method not implemented.');
    }
    refresh(params: ICellRendererParams<any, any, any>): boolean {
        throw new Error('Method not implemented.');
    }


}