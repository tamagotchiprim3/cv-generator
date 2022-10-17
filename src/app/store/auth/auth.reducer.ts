import { createReducer, on } from '@ngrx/store';
import { IAuthLogin } from 'src/app/shared/interfaces/auth.interface';
import { loginActionSuccessed } from './auth.actions';

export interface IAuthState {
  loginData?: IAuthLogin;
}

export const initialState: IAuthState = {
  loginData: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginActionSuccessed, (state, { data }) => ({ ...state, loginData: data }))
);
