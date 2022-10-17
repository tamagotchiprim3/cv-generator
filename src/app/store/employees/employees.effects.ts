import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  EMPTY,
  forkJoin,
  map,
  mergeMap,
  Observable,
  switchMap,
} from 'rxjs';
import { ICreateVirtualCvResponse } from 'src/app/shared/interfaces/employees.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  createCv,
  createCvSuccessed,
  createUser,
  createUserSuccessed,
  createVirtualCv,
  createVirtualCvSuccessed,
  editVirtualCv,
  editVirtualCvSuccessed,
  findCv,
  findCvSuccessed,
  getEmployees,
  getEmployeesSuccessed,
  getProjectRoles,
  getProjectRolesSuccessed,
  getResponsibilities,
  getResponsibilitiesSuccessed,
  getSpecializations,
  getSpecializationsSuccessed,
  getVirtualCv,
  getVirtualCvSuccessed,
  updateUser,
  updateUserSuccessed,
} from './employees.actions';

@Injectable()
export class EmployeesEffect {
  public loadEmployees$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEmployees),
      mergeMap(() =>
        this.employeesApiService.getUsers().pipe(
          map((data) => {
            data.map((item) => {
              item.skillsNames = item.skills.map(({ name }) => name);
              return item;
            });
            return getEmployeesSuccessed({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public getVirtualCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getVirtualCv),
      switchMap((action) => {
        return this.employeesApiService.getVirtualCvById(action.data).pipe(
          map((data) => {
            return getVirtualCvSuccessed({ data });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  public createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUser),
      switchMap((action) =>
        this.employeesApiService.createUser(action.data.userInfo).pipe(
          switchMap((data) => {
            return [
              createUserSuccessed({ data }),
              createCv({
                data: {
                  dataForCv: {
                    user: data.id,
                    name: 'string',
                    description: 'string',
                    projects: [],
                  },
                  dataIds: {
                    cvId: null,
                    userId: data.id,
                  },
                  virtualCvData: action.data.virtualCvData,
                },
              }),
            ];
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public createCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createCv),
      switchMap((action) =>
        this.employeesApiService.createCv(action.data.dataForCv).pipe(
          switchMap((data) => {
            let actionArray: any[] = [createCvSuccessed()];
            if (action.data.virtualCvData) {
              action.data.virtualCvData.forEach((virtualCv) => {
                actionArray.push(
                  createVirtualCv({
                    data: {
                      dataIds: {
                        cvId: data.id,
                        userId: action.data.dataIds.userId,
                      },
                      virtualCvData: virtualCv,
                    },
                  })
                );
              });
            }
            actionArray.push(getEmployees());
            return actionArray;
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public createVirtualCs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createVirtualCv),
      switchMap((action) => {
        return this.employeesApiService
          .createVirtualCv(action.data.dataIds)
          .pipe(
            switchMap((data) => {
              return [
                createVirtualCvSuccessed(),
                editVirtualCv({
                  data: { ...data, data: action.data.virtualCvData },
                }),
              ];
            })
          );
      })
    );
  });

  public editVirtualCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editVirtualCv),
      mergeMap((action) =>
        this.employeesApiService.editVirtualCv(action.data).pipe(
          map((data) => {
            return editVirtualCvSuccessed();
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public getSpecializations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getSpecializations),
      mergeMap(() =>
        this.employeesApiService.getAllSpecialization().pipe(
          map((data) => getSpecializationsSuccessed({ data: data })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public getProjectRoles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProjectRoles),
      mergeMap(() =>
        this.employeesApiService.getAllProjectRoles().pipe(
          map((data) => getProjectRolesSuccessed({ data: data })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public getResponsibilities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getResponsibilities),
      mergeMap(() =>
        this.employeesApiService.getAllResponsibilities().pipe(
          map((data) => getResponsibilitiesSuccessed({ data: data })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) =>
        this.employeesApiService.updateUser(action.data.userInfo).pipe(
          switchMap((data) => {
            let array: any[] = [updateUserSuccessed()];
            action.data.virtualCvData.forEach((virtualCv) => {
              if (!virtualCv.id) {
                array.push(
                  createVirtualCv({
                    data: {
                      dataIds: action.data.dataIds,
                      virtualCvData: virtualCv,
                    },
                  })
                );
              } else {
                array.push(editVirtualCv({ data: virtualCv }));
              }
            });
            array.push(getEmployees());
            return array;
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  public findCv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(findCv),
      switchMap((action) => {
        return this.employeesApiService.findCv(action.data).pipe(
          map((data) => {
            return findCvSuccessed({ data: data });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
  constructor(
    private employeesApiService: EmployeesApiService,
    private actions$: Actions
  ) {}
}
