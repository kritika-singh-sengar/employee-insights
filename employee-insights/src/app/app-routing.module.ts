import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee-curd',
    loadChildren: () => import('./modules/employee-curd/employee-curd.module').then(
      (m) => m.EmployeeCurdModule
    ),
  },
  {
    path: 'employee-details',
    loadChildren: () => import('./modules/employee-details/employee-details.module').then(
      (m) => m.EmployeeDetailsModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
