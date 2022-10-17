import { createAction } from '@ngrx/store';

export const increaseSpinner = createAction('[App] increase spinner count');

export const decreaseSpinner = createAction('[App] decrease spinner count');
