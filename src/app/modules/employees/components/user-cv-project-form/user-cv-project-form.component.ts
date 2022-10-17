import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IProject } from 'src/app/shared/interfaces/projects.interface';

@Component({
  selector: 'app-user-cv-project-form',
  templateUrl: './user-cv-project-form.component.html',
  styleUrls: ['./user-cv-project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvProjectFormComponent
  implements OnInit, ControlValueAccessor
{
  public cvProjectForm: FormGroup;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(private formBuilder: FormBuilder, private ngControl: NgControl) {
    this.cvProjectForm = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      teamSize: ['', Validators.required],
      description: ['', Validators.required],
      tasksPerformed: ['', Validators.required],
      projectRoles: ['', Validators.required],
      specializations: ['', Validators.required],
      responsibilities: ['', Validators.required],
    });

    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.cvProjectForm.valueChanges.subscribe((value: IProject) => {
      this.onChange(value);
    });
  }

  public writeValue(value: IProject): void {
    if (value === null) {
      return;
    }
    this.cvProjectForm.patchValue({
      id: value?.id,
      name: value.name,
      secondName: value.secondName,
      startDate: value.startDate,
      endDate: value.endDate,
      teamSize: value.teamSize,
      description: value.description,
      tasksPerformed: value.tasksPerformed,
      projectRoles: value.projectRoles.map((item) => item.id),
      specializations: value.specializations.map((item) => item.id),
      responsibilities: value.responsibilities.map((item) => item.id),
    });
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
