import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import {
  getProjectsSuccessed,
  getProjects,
  addProjects,
  addProjectSuccessed,
  updateProject,
  updateProjectSuccessed,
} from './projects.actions';

@Injectable()
export class ProjectsEffect {
  public loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProjects),
      mergeMap(() =>
        this.projectsApiService.getProjects().pipe(
          map((data) => {
            data.map((item) => {
              item.specializationsNames = item.specializations.map(
                ({ name }) => name
              );
              item.projectRolesNames = item.projectRoles.map(
                ({ name }) => name
              );
              item.responsibilitiesNames = item.responsibilities.map(
                ({ name }) => name
              );
              return item;
            });
            return getProjectsSuccessed({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public addProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProjects),
      mergeMap((action) =>
        this.projectsApiService.addProjects(action.data).pipe(
          map((data) => {
            return addProjectSuccessed({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public updateProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProject),
      mergeMap((action) =>
        this.projectsApiService.updateProjects(action.data).pipe(
          map((data) => updateProjectSuccessed({ data })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(
    private projectsApiService: ProjectsApiService,
    private actions$: Actions
  ) {}
}
