import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICreateCv,
  ICreateCvResponse,
  ICreateVirtualCv,
  ICreateVirtualCvResponse,
  IEmployee,
} from '../../interfaces/employees.interface';
import { ICascaderOption } from '../../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  private endPoints = {
    employees: ,
    cv: ,
    virtualCv: ,
    specializations:
      ,
    projectRoles: ,
    responsibilities:
      ,
  };

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.endPoints.employees);
  }

  public createUser(data: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.endPoints.employees, data);
  }

  public createCv(data: ICreateCv): Observable<ICreateCvResponse> {
    return this.http.post<ICreateCvResponse>(this.endPoints.cv, data);
  }

  public createVirtualCv(
    data: ICreateVirtualCv
  ): Observable<ICreateVirtualCvResponse> {
    return this.http.post<ICreateVirtualCvResponse>(
      this.endPoints.virtualCv,
      data
    );
  }

  public editVirtualCv(
    data: ICreateVirtualCvResponse
  ): Observable<ICreateVirtualCvResponse> {
    return this.http.put<ICreateVirtualCvResponse>(
      this.endPoints.virtualCv,
      data
    );
  }

  public getVirtualCvById(id: string): Observable<ICreateVirtualCvResponse[]> {
    let queryParams = new HttpParams().append('user', id);
    return this.http.get<ICreateVirtualCvResponse[]>(this.endPoints.virtualCv, {
      params: queryParams,
    });
  }

  public getAllSpecialization(): Observable<ICascaderOption[]> {
    return this.http.get<ICascaderOption[]>(this.endPoints.specializations);
  }

  public getAllProjectRoles(): Observable<ICascaderOption[]> {
    return this.http.get<ICascaderOption[]>(this.endPoints.projectRoles);
  }

  public getAllResponsibilities(): Observable<ICascaderOption[]> {
    return this.http.get<ICascaderOption[]>(this.endPoints.responsibilities);
  }

  public updateUser(data: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(this.endPoints.employees, data);
  }

  public findCv(user: string): Observable<ICreateCvResponse[]> {
    let queryParams = new HttpParams().append('user', user);
    return this.http.get<ICreateCvResponse[]>(this.endPoints.cv, {
      params: queryParams,
    });
  }
}
