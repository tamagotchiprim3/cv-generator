import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBreadcrumb } from '../interfaces/breadcrumbs.interface';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  constructor() {}

  public clearBreadcrumbs(): void {}
}
