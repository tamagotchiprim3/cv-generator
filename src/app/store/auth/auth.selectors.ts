import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

export const authStore = createFeatureSelector<IAuthState>('auth');

export const getLoginData = (state: IAuthState) => state.loginData;

export const selectAuthData = createSelector(authStore, getLoginData);
