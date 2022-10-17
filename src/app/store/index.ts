import { ActionReducerMap } from '@ngrx/store';
import { appReducer, IAppState } from './app/app.reducer';
import { AuthEffect } from './auth/auth.effects';
import { authReducer, IAuthState } from './auth/auth.reducer';
import {
  breadcrumbsReducer,
  IBreadcrumbsState,
} from './breadcrumbs/breadcrumbs.reducer';
import { EmployeesEffect } from './employees/employees.effects';
import {
  employeesReducer,
  IEmployeesState,
} from './employees/employees.reducer';
import { ProjectsEffect } from './projects/projects.effects';
import { IProjectsState, projectsReducer } from './projects/projects.reducer';

export interface ICoreState {
  employees: IEmployeesState;
  projects: IProjectsState;
  auth: IAuthState;
  app: IAppState;
  breadcrumbs: IBreadcrumbsState;
}

export const reducers: ActionReducerMap<any> = {
  employees: employeesReducer,
  projects: projectsReducer,
  auth: authReducer,
  app: appReducer,
  breadcrumbs: breadcrumbsReducer,
};

export const effects: any[] = [ProjectsEffect, AuthEffect, EmployeesEffect];
