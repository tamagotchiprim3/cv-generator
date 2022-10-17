import { createReducer, on } from '@ngrx/store';
import { uniq } from 'lodash';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { clearBreadcrumbs, pushToBreadcrumbs } from './breadcrumbs.action';

export interface IBreadcrumbsState {
  currentBreadcrumbsArr?: IBreadcrumb[];
}

const initialState: IBreadcrumbsState = {
  currentBreadcrumbsArr: [],
};

export const breadcrumbsReducer = createReducer(
  initialState,
  on(pushToBreadcrumbs, (state, { data }) => {
    if (
      data.breadcrumbName === 'projectPageBreadcrumb.name' ||
      data.breadcrumbName === 'employeesPageBreadcrumb.name' ||
      data.breadcrumbName === 'dashboardPageBreadcrumb.name'
    ) {
      return {
        ...state,
        currentBreadcrumbsArr: [
          ...state.currentBreadcrumbsArr.slice(0, 1),
          data,
        ],
      };
    } else {
      return {
        ...state,
        currentBreadcrumbsArr: [...state.currentBreadcrumbsArr, data],
      };
    }
  }),
  on(clearBreadcrumbs, (state, { data }) => {
    if (data === 0) {
      data += 1;
    }
    return {
      ...state,
      currentBreadcrumbsArr: state.currentBreadcrumbsArr.slice(0, data),
    };
  })
);
