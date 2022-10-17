import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeesState } from './employees.reducer';

export const employeesStore =
  createFeatureSelector<IEmployeesState>('employees');

export const getEmployeesSelect = (state: IEmployeesState) =>
  state.loadedEmployees;

export const selectEmployeesList = createSelector(
  employeesStore,
  getEmployeesSelect
);

export const getVirtualCvs = (state: IEmployeesState) =>
  state?.currentVirtualCv;

export const selectVirtualCv = createSelector(employeesStore, getVirtualCvs);

export const getSpecializations = (state: IEmployeesState) =>
  state.specializations;

export const selectSpecializations = createSelector(
  employeesStore,
  getSpecializations
);

export const getProjectRoles = (state: IEmployeesState) => state.projectRoles;

export const selectProjectRoles = createSelector(
  employeesStore,
  getProjectRoles
);

export const getResponsibilities = (state: IEmployeesState) =>
  state.responsibilities;

export const selectResponsibilities = createSelector(
  employeesStore,
  getResponsibilities
);

export const getCvId = (state: IEmployeesState) => state.cvId;

export const selectCvId = createSelector(employeesStore, getCvId);
