import { IBreadcrumb } from '../interfaces/breadcrumbs.interface';
import {
  EMPLOYEES_CREATE_PATH,
  EMPLOYEES_PATH,
  PROJECTS_CREATE_PATH,
  PROJECTS_EDIT_PATH,
  PROJECTS_PATH,
} from './routing-path.const';

export const HOME_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'homeBreadcrumb.name',
  title: 'homeBreadcrumb.title',
  description: 'homeBreadcrumb.description',
  url: '',
};

export const PROJECT_PAGE_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'projectPageBreadcrumb.name',
  title: 'projectPageBreadcrumb.title',
  description: 'projectPageBreadcrumb.description',
  url: PROJECTS_PATH.path,
};

export const PROJECT_CREATE_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'projectCreateBreadcrumb.name',
  title: 'projectCreateBreadcrumb.title',
  description: 'projectCreateBreadcrumb.description',
  url: PROJECTS_CREATE_PATH.path,
};

export const EMPLOYEES_PAGE_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'employeesPageBreadcrumb.name',
  title: 'employeesPageBreadcrumb.title',
  description: 'employeesPageBreadcrumb.description',
  url: EMPLOYEES_PATH.path,
};

export const EMPLOYEES_CREATE_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'employeesCreateBreadcrumb.name',
  title: 'employeesCreateBreadcrumb.title',
  description: 'employeesCreateBreadcrumb.description',
  url: EMPLOYEES_CREATE_PATH.path,
};

export const DASHBOARD_PAGE_BREADCRUMB: IBreadcrumb = {
  breadcrumbName: 'dashboardPageBreadcrumb.name',
  title: 'dashboardPageBreadcrumb.title',
  description: 'dashboardPageBreadcrumb.description',
  url: EMPLOYEES_CREATE_PATH.path,
};
