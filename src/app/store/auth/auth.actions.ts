import { createAction, props } from '@ngrx/store';
import {
  IAuthLogin,
  IFormData,
} from 'src/app/shared/interfaces/auth.interface';

export const loginAction = createAction(
  '[Auth Page] login',
  props<{ data: IFormData }>()
);

export const loginActionSuccessed = createAction(
  '[Auth Page] login Successed',
  props<{ data: IAuthLogin }>()
);
