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
import { ILanguage } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-user-cv-languages-form',
  templateUrl: './user-cv-languages-form.component.html',
  styleUrls: ['./user-cv-languages-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvLanguagesFormComponent
  implements OnInit, ControlValueAccessor
{
  public cvLanguagesForm: FormGroup;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(private formBuilder: FormBuilder, private ngControl: NgControl) {
    this.cvLanguagesForm = formBuilder.group({
      name: ['', Validators.required],
      everydayReadingLevel: ['', Validators.required],
      everydayWritingLevel: ['', Validators.required],
      everydaySpeakingLevel: ['', Validators.required],
      professionalReadingLevel: ['', Validators.required],
      professionalWritingLevel: ['', Validators.required],
      professionalSpeakingLevel: ['', Validators.required],
    });

    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.cvLanguagesForm.valueChanges.subscribe((value: ILanguage) => {
      this.onChange(value);
    });
  }

  public writeValue(value: ILanguage): void {
    if (value === null) {
      return;
    }
    this.cvLanguagesForm.patchValue({
      name: value.name,
      everydayReadingLevel: value.everydayReadingLevel,
      everydayWritingLevel: value.everydayWritingLevel,
      everydaySpeakingLevel: value.everydaySpeakingLevel,
      professionalReadingLevel: value.professionalReadingLevel,
      professionalWritingLevel: value.professionalWritingLevel,
      professionalSpeakingLevel: value.professionalSpeakingLevel,
    });
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
