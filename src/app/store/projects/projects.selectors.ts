import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectsState } from './projects.reducer';

export const projectsStore = createFeatureSelector<IProjectsState>('projects');

export const getProjectsSelect = (state: IProjectsState) =>
  state.loadedProjects;

export const selectProjectsList = createSelector(
  projectsStore,
  getProjectsSelect
);
