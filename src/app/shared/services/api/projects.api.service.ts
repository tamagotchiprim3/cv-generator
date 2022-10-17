import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../../interfaces/projects.interface';

@Injectable({ providedIn: 'root' })
export class ProjectsApiService {
  private endPoints = {
    projects:
  };

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.endPoints.projects);
  }

  public addProjects(data: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.endPoints.projects, data);
  }

  public updateProjects(data: IProject): Observable<IProject> {
    return this.http.put<IProject>(this.endPoints.projects, data);
  }
}
