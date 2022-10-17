import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { EMPLOYEES_EDIT_PATH } from 'src/app/shared/constants/routing-path.const';
import {
  ICreateVirtualCv,
  IEmployee,
} from 'src/app/shared/interfaces/employees.interface';
import { ICascaderOption } from 'src/app/shared/interfaces/projects.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import {
  clearBreadcrumbs,
  pushToBreadcrumbs,
} from 'src/app/store/breadcrumbs/breadcrumbs.action';
import {
  clearCurrentVirtualCv,
  findCv,
  getEmployees,
  getProjectRoles,
  getResponsibilities,
  getSpecializations,
  getVirtualCv,
} from 'src/app/store/employees/employees.actions';
import {
  selectCvId,
  selectEmployeesList,
  selectProjectRoles,
  selectResponsibilities,
  selectSpecializations,
  selectVirtualCv,
} from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-employees-edit-page',
  templateUrl: './employees-edit-page.component.html',
  styleUrls: ['./employees-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesEditPageComponent implements OnInit, OnDestroy {
  public spinnerCount: number = 0;
  public allSpecs: ICascaderOption[];
  public allResp: ICascaderOption[];
  public allProjRoles: ICascaderOption[];
  public dataIds: ICreateVirtualCv = {
    userId: null,
    cvId: null,
  };
  public formData: { userInfo?: IEmployee; virtualCvData?: any } = {};

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cdR: ChangeDetectorRef,
    private employeesApiService: EmployeesApiService
  ) {}

  ngOnDestroy(): void {
    this.store.dispatch(clearCurrentVirtualCv());
    this.store.dispatch(clearBreadcrumbs({ data: 1 }));
  }

  ngOnInit(): void {
    this.store.select(selectSpinnerCount).subscribe((data) => {
      this.cdR.markForCheck();
      this.spinnerCount = data;
    });

    const id = this.route.snapshot.queryParams['id'];
    this.dataIds.userId = id;
    this.store.dispatch(getEmployees());
    this.store
      .select(selectEmployeesList)
      .pipe(
        map((data) => {
          return cloneDeep(data).find((item: IEmployee) => item.id === id);
        })
      )
      .subscribe((data) => {
        this.formData.userInfo = data;
      });

    this.store.dispatch(findCv({ data: id }));
    this.store.select(selectCvId).subscribe((data) => {
      this.dataIds.cvId = data;
    });
    this.store.dispatch(getProjectRoles());
    this.store
      .select(selectProjectRoles)
      .subscribe((data) => (this.allProjRoles = cloneDeep(data)));
    this.store.dispatch(getResponsibilities());
    this.store
      .select(selectResponsibilities)
      .subscribe((data) => (this.allResp = cloneDeep(data)));
    this.store.dispatch(getSpecializations());
    this.store
      .select(selectSpecializations)
      .subscribe((data) => (this.allSpecs = cloneDeep(data)));

    this.store.dispatch(getVirtualCv({ data: id }));
    this.store
      .select(selectVirtualCv)
      .pipe(
        map((data) =>
          cloneDeep(data).map((item: any) => {
            if (!Array.isArray(item.data.education)) {
              item.data.education = [item.data.education];
            }
            item.data.projects.forEach((project: any) => {
              project.projectRoles = this.allProjRoles.filter((projRoles) =>
                project.projectRoles.find(
                  (projectRoles: string) =>
                    projRoles.id === projectRoles ||
                    projRoles.name === projectRoles
                )
              );

              project.responsibilities = this.allResp.filter((resp) =>
                project.responsibilities.find(
                  (projectResp: string) =>
                    resp.id === projectResp || resp.name === projectResp
                )
              );

              project.specializations = this.allSpecs.filter((spec) =>
                project.specializations.find(
                  (projectSpec: string) =>
                    spec.id === projectSpec || spec.name === projectSpec
                )
              );
            });
            return item;
          })
        )
      )
      .subscribe((data) => {
        this.formData.virtualCvData = data;
      });
    this.store.dispatch(
      pushToBreadcrumbs({
        data: {
          breadcrumbName: `${this.formData.userInfo.firstName} ${this.formData.userInfo.lastName}`,
          title: `Edit ${this.formData.userInfo.firstName} ${this.formData.userInfo.lastName} employee`,
          description: 'edit your employee here',
          url: EMPLOYEES_EDIT_PATH.path,
        },
      })
    );
  }
}
