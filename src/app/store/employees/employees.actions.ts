import { createAction, props } from '@ngrx/store';
import {
  ICreateCv,
  ICreateCvResponse,
  ICreateVirtualCv,
  ICreateVirtualCvResponse,
  IEmployee,
} from 'src/app/shared/interfaces/employees.interface';
import { ICascaderOption } from 'src/app/shared/interfaces/projects.interface';

export const getEmployees = createAction('[Employees page] get employees');

export const getEmployeesSuccessed = createAction(
  '[Employees page] get employees successed',
  props<{ data: IEmployee[] }>()
);

export const getVirtualCv = createAction(
  '[Employees page] get virtual cv ',
  props<{ data: string }>()
);

export const getVirtualCvSuccessed = createAction(
  '[Employees page] get virtual cv successed',
  props<{ data: ICreateVirtualCvResponse[] }>()
);

export const createUser = createAction(
  '[Employees page] add user',
  props<{ data: { userInfo: IEmployee; virtualCvData: any[] } }>()
);

export const createUserSuccessed = createAction(
  '[Employees page] add user successed',
  props<{ data: IEmployee }>()
);

export const createCv = createAction(
  '[Employees page] create cv',
  props<{
    data: {
      dataForCv: ICreateCv;
      dataIds: ICreateVirtualCv;
      virtualCvData: any[];
    };
  }>()
);

export const createCvSuccessed = createAction(
  '[Employees page] create cv successed'
);

export const createVirtualCv = createAction(
  '[Employees page] create virtual cv',
  props<{ data: { dataIds: ICreateVirtualCv; virtualCvData: any[] } }>()
);

export const createVirtualCvSuccessed = createAction(
  '[Employees page] create virtual cv successed'
);

export const editVirtualCv = createAction(
  '[Employees page] edit virtual cv ',
  props<{ data: ICreateVirtualCvResponse }>()
);

export const editVirtualCvSuccessed = createAction(
  '[Employees page] edit virtual cv successed'
);

export const getUserCv = createAction('[Employees page] get user Cv');

export const getUserCvSuccessed = createAction(
  '[Employees page] get user Cv successed'
);

export const getSpecializations = createAction(
  '[Employees page] get specializations'
);

export const getSpecializationsSuccessed = createAction(
  '[Employees page] get specializations successed',
  props<{ data: ICascaderOption[] }>()
);

export const getProjectRoles = createAction(
  '[Employees page] get project roles'
);

export const getProjectRolesSuccessed = createAction(
  '[Employees page] get project roles  successed',
  props<{ data: ICascaderOption[] }>()
);

export const getResponsibilities = createAction(
  '[Employees page] get responsibilities'
);

export const getResponsibilitiesSuccessed = createAction(
  '[Employees page] get responsibilities successed',
  props<{ data: ICascaderOption[] }>()
);

export const updateUser = createAction(
  '[Employees page] update user',
  props<{
    data: {
      userInfo: IEmployee;
      dataIds: ICreateVirtualCv;
      virtualCvData: any[];
    };
  }>()
);

export const updateUserSuccessed = createAction(
  '[Employees page] update user successed'
);

export const clearCurrentVirtualCv = createAction(
  '[Employees page] clear current VCv state'
);

export const findCv = createAction(
  '[Employees page] find cv',
  props<{ data: string }>()
);

export const findCvSuccessed = createAction(
  '[Employees page] find cv successed',
  props<{ data: ICreateCvResponse[] }>()
);
