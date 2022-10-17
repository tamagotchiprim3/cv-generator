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
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IResume } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-user-cv-resume-form',
  templateUrl: './user-cv-resume-form.component.html',
  styleUrls: ['./user-cv-resume-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvResumeFormComponent implements OnInit, ControlValueAccessor {
  public cvResumeForm: FormGroup;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(private formBuilder: FormBuilder, private ngControl: NgControl) {
    this.cvResumeForm = formBuilder.group({
      content: [''],
    });

    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.cvResumeForm.valueChanges.subscribe((value: IResume) => {
      this.onChange(value);
    });
  }

  public writeValue(value: IResume): void {
    if (value === null) {
      return;
    }
    this.cvResumeForm.patchValue({
      content: value.content,
    });
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
