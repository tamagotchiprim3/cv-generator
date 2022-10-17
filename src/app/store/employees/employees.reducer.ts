import { createReducer, on } from '@ngrx/store';
import {
  ICreateCvResponse,
  ICreateVirtualCvResponse,
  IEmployee,
} from 'src/app/shared/interfaces/employees.interface';
import { ICascaderOption } from 'src/app/shared/interfaces/projects.interface';
import {
  clearCurrentVirtualCv,
  createCvSuccessed,
  createUserSuccessed,
  findCvSuccessed,
  getEmployeesSuccessed,
  getProjectRolesSuccessed,
  getResponsibilitiesSuccessed,
  getSpecializationsSuccessed,
  getVirtualCvSuccessed,
} from './employees.actions';

export interface IEmployeesState {
  loadedEmployees?: IEmployee[];
  currentVirtualCv?: ICreateVirtualCvResponse[];
  specializations?: ICascaderOption[];
  projectRoles?: ICascaderOption[];
  responsibilities?: ICascaderOption[];
  cvId?: string;
}

const initialState: IEmployeesState = {
  loadedEmployees: null,
  currentVirtualCv: [],
  specializations: [],
  projectRoles: [],
  responsibilities: [],
  cvId: '',
};

export const employeesReducer = createReducer(
  initialState,
  on(getEmployeesSuccessed, (state, { data }) => ({
    ...state,
    loadedEmployees: data,
  })),
  on(createUserSuccessed, (state, { data }) => {
    return {
      ...state,
      loadedEmployees: [...state.loadedEmployees, data],
    };
  }),
  on(getVirtualCvSuccessed, (state, { data }) => {
    return {
      ...state,
      currentVirtualCv: data,
    };
  }),
  on(getSpecializationsSuccessed, (state, { data }) => {
    return {
      ...state,
      specializations: data,
    };
  }),
  on(getProjectRolesSuccessed, (state, { data }) => {
    return {
      ...state,
      projectRoles: data,
    };
  }),
  on(getResponsibilitiesSuccessed, (state, { data }) => {
    return {
      ...state,
      responsibilities: data,
    };
  }),
  on(clearCurrentVirtualCv, (state) => {
    return {
      ...state,
      currentVirtualCv: [],
    };
  }),
  on(findCvSuccessed, (state, { data }) => {
    return {
      ...state,
      cvId: data[0].id,
    };
  })
);
