import { createAction, props } from '@ngrx/store';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';

export const pushToBreadcrumbs = createAction(
  '[Breadcrumbs] push to breadcrumbs',
  props<{ data: IBreadcrumb }>()
);

export const clearBreadcrumbs = createAction(
  '[Breadcrumbs] clear breadcrumbs',
  props<{ data: number }>()
);
