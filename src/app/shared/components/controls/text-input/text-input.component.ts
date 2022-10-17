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
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent
  implements DoCheck, OnInit, ControlValueAccessor
{
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorTip: string = 'Please, specify the field';
  @Input() public type: string = 'text';
  @Input() public disable: boolean = false;

  public control = new FormControl();
  public value: string;
  public onChange: (value: string) => void;
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
    this.control.valueChanges.subscribe((value: string) => {
      this.onChange(value);
    });

    this.checkToDisable();
  }

  public checkToDisable(): void {
    if (this.disable) {
      this.control.disable();
    }
  }

  public writeValue(value: string): void {
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
