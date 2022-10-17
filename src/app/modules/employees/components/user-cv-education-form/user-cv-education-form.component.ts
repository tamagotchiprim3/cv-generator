import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IEducation } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-user-cv-education-form',
  templateUrl: './user-cv-education-form.component.html',
  styleUrls: ['./user-cv-education-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvEducationFormComponent
  implements OnInit, ControlValueAccessor
{
  public cvEducationForm: FormGroup;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(private formBuilder: FormBuilder, private ngControl: NgControl) {
    this.cvEducationForm = formBuilder.group({
      establishment: ['', Validators.required],
      profession: ['', Validators.required],
    });

    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.cvEducationForm.valueChanges.subscribe((value: IEducation) => {
      this.onChange(value);
    });
  }

  public writeValue(value: IEducation): void {
    if (value === null) {
      return;
    }
    this.cvEducationForm.patchValue({
      establishment: value.establishment,
      profession: value.profession,
    });
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
