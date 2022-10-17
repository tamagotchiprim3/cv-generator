import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBreadcrumbsState } from './breadcrumbs.reducer';

export const breadcrumbsStore =
  createFeatureSelector<IBreadcrumbsState>('breadcrumbs');

export const getBreadcrumbsList = (state: IBreadcrumbsState) =>
  state.currentBreadcrumbsArr;

export const selectBreadcrumbslist = createSelector(
  breadcrumbsStore,
  getBreadcrumbsList
);
