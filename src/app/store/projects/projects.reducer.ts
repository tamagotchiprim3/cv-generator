import { createReducer, on } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import {
  addProjectSuccessed,
  getProjectsSuccessed,
  updateProjectSuccessed,
} from './projects.actions';

export interface IProjectsState {
  loadedProjects?: IProject[];
}

const initialState: IProjectsState = {
  loadedProjects: null,
};

export const projectsReducer = createReducer(
  initialState,
  on(getProjectsSuccessed, (state, { data }) => ({
    ...state,
    loadedProjects: data,
  })),
  on(addProjectSuccessed, (state, { data }) => {
    return {
      ...state,
      loadedProjects: [data, ...state.loadedProjects],
    };
  }),
  on(updateProjectSuccessed, (state, { data }) => {
    const indexToChange = state.loadedProjects.findIndex(
      (item) => item.id === data.id
    );
    const newProjects = [...state.loadedProjects];
    newProjects[indexToChange] = data;
    return {
      ...state,
      loadedProjects: newProjects,
    };
  })
);
