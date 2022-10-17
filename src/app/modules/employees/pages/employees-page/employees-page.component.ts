import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map, Observable } from 'rxjs';
import { EMPLOYEES_PAGE_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import {
  EMPLOYEES_CREATE_PATH,
  EMPLOYEES_EDIT_PATH,
  EMPLOYEES_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { IColumn } from 'src/app/shared/interfaces/column.interface';
import { IEmployee } from 'src/app/shared/interfaces/employees.interface';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import { pushToBreadcrumbs } from 'src/app/store/breadcrumbs/breadcrumbs.action';
import { getEmployees } from 'src/app/store/employees/employees.actions';
import { selectEmployeesList } from 'src/app/store/employees/employees.selectors';
import { EMPLOYEE_COLUMNS } from './constants/column.const';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent implements OnInit {
  public pageType: string = 'employees';
  public spinnerCount: number = 0;
  public apiData: Observable<IEmployee[]>;
  public readonly tableColumns: IColumn[] = EMPLOYEE_COLUMNS;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: EMPLOYEES_PAGE_BREADCRUMB,
      })
    );
    this.store
      .select(selectSpinnerCount)
      .subscribe((data) => (this.spinnerCount = data));

    this.store.dispatch(getEmployees());
    this.apiData = this.store
      .select(selectEmployeesList)
      .pipe(map((data) => cloneDeep(data)));
  }

  public redirectToCreate(): void {
    this.router.navigate([EMPLOYEES_PATH.path, EMPLOYEES_CREATE_PATH.path]);
  }

  public redirectToEdit(id: string): void {
    this.router.navigate([EMPLOYEES_PATH.path, EMPLOYEES_EDIT_PATH.path, id], {
      queryParams: {
        id: id,
      },
    });
  }
}
