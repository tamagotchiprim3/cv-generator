import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/projects.interface';

export const getProjects = createAction('[Projects page] get projects');

export const getProjectsSuccessed = createAction(
  '[Projects page] get projects successed',
  props<{ data: IProject[] }>()
);

export const addProjects = createAction(
  '[Projects Page] add projects',
  props<{ data: IProject }>()
);

export const addProjectSuccessed = createAction(
  '[Projects page] add projects successed',
  props<{ data: IProject }>()
);

export const updateProject = createAction(
  '[Project page] update projects',
  props<{ data: IProject }>()
);

export const updateProjectSuccessed = createAction(
  '[Project page] update projects successed',
  props<{ data: IProject }>()
);
