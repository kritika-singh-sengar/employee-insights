import { ColDef } from "ag-grid-community";
import { ActionCustomCellRenderer } from "../components/ag-grid-custom-cell-renders/action-custom-render.component";
import { COLUMN_HEADER } from "../enums/col-def.enum";

export const EMPLOYEE_INSIGHTS_COL_DEFS: ColDef[] = [
    {
        headerName: COLUMN_HEADER.NAME,
        headerTooltip: COLUMN_HEADER.NAME,
        field: 'name',
        tooltipField: 'name'
    },
    {
        headerName: COLUMN_HEADER.COUNTRY,
        headerTooltip: COLUMN_HEADER.COUNTRY,
        field: 'country',
        tooltipField: 'country'
    },
    {
        headerName: COLUMN_HEADER.SKILLS,
        headerTooltip: COLUMN_HEADER.SKILLS,
        field: 'skills',
        tooltipField: 'skills'
    },
    {
        headerName: COLUMN_HEADER.PROFICIENCY,
        headerTooltip: COLUMN_HEADER.PROFICIENCY,
        field: 'proficiency',
        tooltipField: 'proficiency'
    },
    {
        headerName: COLUMN_HEADER.MOBILE,
        headerTooltip: COLUMN_HEADER.MOBILE,
        field: 'mobile',
        tooltipField: 'mobile'
    },
    {
        headerName: COLUMN_HEADER.EMAIL,
        headerTooltip: COLUMN_HEADER.EMAIL,
        field: 'email',
        tooltipField: 'email'
    },
    {
        headerName: COLUMN_HEADER.ACTION,
        headerTooltip: COLUMN_HEADER.ACTION,
        maxWidth: 80,
        cellRenderer: ActionCustomCellRenderer
    }
];

export const defaultColumnDefs: ColDef[] = [

];