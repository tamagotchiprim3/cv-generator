import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EMPLOYEES_CREATE_PATH,
  EMPLOYEES_EDIT_PATH,
  EMPLOYEES_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { EmployeesCreatePageComponent } from './pages/employees-create-page/employees-create-page.component';
import { EmployeesEditPageComponent } from './pages/employees-edit-page/employees-edit-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [
  { path: '', component: EmployeesPageComponent },
  {
    path: EMPLOYEES_CREATE_PATH.path,
    component: EmployeesCreatePageComponent,
  },
  {
    path: `${EMPLOYEES_EDIT_PATH.path}/:id`,
    component: EmployeesEditPageComponent,
  },
  { path: '**', redirectTo: EMPLOYEES_PATH.path },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
