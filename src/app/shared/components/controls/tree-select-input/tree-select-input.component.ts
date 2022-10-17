import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { ICascaderOption } from 'src/app/shared/interfaces/projects.interface';
import { FormApiService } from 'src/app/shared/services/api/form.api.service';

@Component({
  selector: 'app-tree-select-input',
  templateUrl: './tree-select-input.component.html',
  styleUrls: ['./tree-select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeSelectInputComponent
  implements DoCheck, OnInit, ControlValueAccessor, AfterContentChecked
{
  @Input() public multiple: boolean = true;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorTip: string = 'Please, specify the field';

  public nzNodes: { title: string; key: string; isLeaf: boolean }[] = [];
  public control = new FormControl();
  public value: any;
  public onChange: (value: any) => void;
  public onTouched: () => void;

  constructor(
    private ngControl: NgControl,
    private formApiService: FormApiService,
    private cdR: ChangeDetectorRef
  ) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  ngAfterContentChecked(): void {
    this.cdR.markForCheck();
  }

  ngDoCheck(): void {
    if (this.ngControl.control.errors !== this.control.errors) {
      this.initErrors();
    }
  }

  ngOnInit(): void {
    this.formApiService
      .findNodes(String(this.ngControl.name))
      .pipe(
        map((data) =>
          data.map((item) => ({
            title: item.name,
            key: item.id,
            isLeaf: true,
          }))
        )
      )
      .subscribe((data) => (this.nzNodes = data));
    this.control.setValue(this.ngControl.control.value);
    this.control.valueChanges.subscribe((value: any) => {
      this.onChange(value);
    });
  }

  public writeValue(value: ICascaderOption[]): void {
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
