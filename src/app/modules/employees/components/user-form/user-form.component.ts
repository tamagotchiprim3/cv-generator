import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { EMPLOYEES_PATH } from 'src/app/shared/constants/routing-path.const';
import {
  ICreateVirtualCv,
  ICreateVirtualCvResponse,
  IEmployee,
} from 'src/app/shared/interfaces/employees.interface';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import {
  createUser,
  updateUser,
} from 'src/app/store/employees/employees.actions';
import { UserCvComponent } from '../user-cv/user-cv.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent
  implements OnInit, OnChanges, AfterContentChecked
{
  public isEdit: boolean = false;
  @Input() public dataIds: ICreateVirtualCv;
  @Input() public formData?: {
    userInfo?: IEmployee;
    virtualCvData?: ICreateVirtualCvResponse[];
  };
  @ViewChild(UserInfoComponent) info: UserInfoComponent;
  @ViewChild(UserCvComponent) cv: UserCvComponent;

  constructor(
    private router: Router,
    private store: Store,
    private employeesApiService: EmployeesApiService,
    private cdR: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(): void {
    this.cdR.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData'].currentValue) {
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
    if (this.formData) {
      this.isEdit = true;
    }
  }

  public formatInfoForm(data: IEmployee): IEmployee {
    delete data.password;
    data.id = this.formData.userInfo.id;
    return data;
  }

  public submit(): void {
    if (!this.isEdit) {
      this.store.dispatch(
        createUser({
          data: {
            userInfo: this.info.infoForm.getRawValue(),
            virtualCvData: this.cv.virtualCvsForm
              .get('virtualCvList')
              .getRawValue(),
          },
        })
      );
    } else {
      this.store.dispatch(
        updateUser({
          data: {
            userInfo: this.formatInfoForm(this.info.infoForm.getRawValue()),
            dataIds: this.dataIds,
            virtualCvData: this.cv.virtualCvsForm
              .get('virtualCvList')
              .getRawValue(),
          },
        })
      );
    }
    this.router.navigate([EMPLOYEES_PATH.path]);
  }

  public cancel(): void {
    this.router.navigate([EMPLOYEES_PATH.path]);
  }
}
