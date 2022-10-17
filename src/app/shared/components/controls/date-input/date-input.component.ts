import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent
  implements DoCheck, OnInit, ControlValueAccessor
{
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorTip: string = 'Please, specify the field';

  public control = new FormControl();
  public value: Date;
  public onChange: (value: Date) => void;
  public onTouched: () => void;

  constructor(private ngControl: NgControl) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  ngOnInit(): void {
    this.control.setValue(this.ngControl.control.value);
    this.control.valueChanges.subscribe((value: Date) => {
      this.onChange(value);
    });
  }

  ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.initErrors();
    }
  }

  public writeValue(value: Date): void {
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
