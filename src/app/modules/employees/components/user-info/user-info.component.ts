import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { EMPLOYEES_PATH } from 'src/app/shared/constants/routing-path.const';
import { IEmployee } from 'src/app/shared/interfaces/employees.interface';
import { createUser } from 'src/app/store/employees/employees.actions';
import { selectEmployeesList } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnChanges, AfterContentChecked {
  public infoForm: FormGroup;
  public isEdit: boolean = false;
  @Input() public dataForForm: IEmployee;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private cdR: ChangeDetectorRef
  ) {
    this.infoForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: [{ value: '', disabled: this.isEdit }, Validators.required],
      email: ['', Validators.required],
      institution: [{ value: ' ', disabled: true }, Validators.required],
      diplomaProfession: [{ value: ' ', disabled: true }, Validators.required],
      skills: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required],
      languages: ['', Validators.required],
    });
  }

  ngAfterContentChecked(): void {
    this.cdR.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataForForm'].currentValue) {
      this.isEdit = !this.isEdit;
      this.infoForm.patchValue({
        firstName: this.dataForForm.firstName,
        lastName: this.dataForForm.lastName,
        email: this.dataForForm.email,
        institution: this.dataForForm.institution,
        diplomaProfession: this.dataForForm.diplomaProfession,
        skills: this.dataForForm.skills.map((item) => item.id),
        role: this.dataForForm.role.id,
        department: this.dataForForm.department,
        languages: this.dataForForm.languages.map((item) => item.id),
      });
    }
  }
}
