import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormApiService } from 'src/app/shared/services/api/form.api.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent
  implements DoCheck, OnInit, ControlValueAccessor
{
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorTip: string = 'Please, specify the field';

  public control = new FormControl();
  public value: number;
  public onChange: (value: number) => void;
  public onTouched: () => void;

  constructor(
    private ngControl: NgControl,
    private formApiService: FormApiService
  ) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.initErrors();
    }
  }

  ngOnInit(): void {
    this.control.setValue(this.ngControl.control.value);
    this.control.valueChanges.subscribe((value: number) => {
      this.onChange(+value);
    });
  }

  public writeValue(value: number): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  private initErrors(): void {
    this.control.setErrors(this.ngControl.control.errors);
  }
}
