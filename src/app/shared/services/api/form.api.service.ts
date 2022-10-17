import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICascaderOption } from '../../interfaces/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class FormApiService {
  private endPoints = {
    projects: ,
    responsibilities:
      ,
    specializations:
      ,
    projectRoles: ,
    skills: ,
    languages: ,
    role:
  };

  constructor(private http: HttpClient) {}

  public findNodes(url: string): Observable<ICascaderOption[]> {
    return this.http.get<ICascaderOption[]>(
      this.endPoints[url as keyof typeof this.endPoints]
    );
  }
}
