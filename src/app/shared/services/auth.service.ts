import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AUTH_TOKEN, EXPIRES_TOKEN } from '../constants/local-storage.const';
import { IAuthLogin, IFormData } from '../interfaces/auth.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private endPoints = {
    post: ,
  };

  constructor(private http: HttpClient) {}

  public authPostData(formData: IFormData): Observable<IAuthLogin> {
    return this.http.post<IAuthLogin>(this.endPoints.post, formData).pipe(
      tap((data: IAuthLogin) => {
        this.setToken(data.accessToken, +data.expiresIn);
      })
    );
  }

  public getToken(): string {
    return localStorage.getItem('AUTH_TOKEN');
  }

  public setToken(token: string, expiresIn: number): void {
    const expDate = new Date(new Date().getTime() + +expiresIn);
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(EXPIRES_TOKEN, expDate.toString());
  }

  public isAuthentificated(): boolean {
    return !!localStorage.getItem('AUTH_TOKEN');
  }

  public isExpired(): boolean {
    return (
      new Date().getTime() >
      new Date(localStorage.getItem(EXPIRES_TOKEN)).getTime()
    );
  }
}
