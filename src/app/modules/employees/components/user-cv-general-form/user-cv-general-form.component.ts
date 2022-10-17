import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IGeneral } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-user-cv-general-form',
  templateUrl: './user-cv-general-form.component.html',
  styleUrls: ['./user-cv-general-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvGeneralFormComponent
  implements OnInit, ControlValueAccessor
{
  public cvGeneralForm: FormGroup;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(private formBuilder: FormBuilder, private ngControl: NgControl) {
    this.cvGeneralForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      name: ['', Validators.required],
    });

    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.cvGeneralForm.valueChanges.subscribe((value: IGeneral) => {
      this.onChange(value);
    });
  }

  public writeValue(value: IGeneral): void {
    if (value === null) {
      return;
    }
    this.cvGeneralForm.patchValue({
      firstName: value.firstName,
      lastName: value.lastName,
      name: value.name,
    });
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
