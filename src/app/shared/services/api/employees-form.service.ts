import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService {
  private endPoints = {
    skills: ,
    languages: ,
  };

  constructor(private http: HttpClient) {}

  public findNodes(url: string): Observable<any> {
    return this.http.get<any>(
      this.endPoints[url as keyof typeof this.endPoints]
    );
  }
}
