import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DASHBOARD_PATH,
  EMPLOYEES_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent,
    children: [
      {
        path: DASHBOARD_PATH.path,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: EMPLOYEES_PATH.path,
        loadChildren: () =>
          import('../employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: PROJECTS_PATH.path,
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
  { path: '**', redirectTo: PROJECTS_PATH.path },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
