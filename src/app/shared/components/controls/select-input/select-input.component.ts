import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map, Observable } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { getProjects } from 'src/app/store/projects/projects.actions';
import { selectProjectsList } from 'src/app/store/projects/projects.selectors';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public errorTip: string = 'Please, specify the field';
  @Output() public selectedProject = new EventEmitter<IProject>();

  public projectList: Observable<IProject[]>;
  public value: IProject;
  public control = new FormControl();
  public onChange: (value: IProject) => void;
  public onTouched: () => void;

  constructor(private store: Store, private ngControl: NgControl) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  ngOnInit(): void {
    this.store.dispatch(getProjects());
    this.projectList = this.store
      .select(selectProjectsList)
      .pipe(map((data) => cloneDeep(data)));

    this.control.valueChanges.subscribe((value: IProject) => {
      return this.onChange(value);
    });
  }

  public writeValue(value: IProject): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public fillFields(value: IProject): void {
    this.selectedProject.emit(value);
  }

  public trackByFn(index: any, item: any): any {
    return index;
  }
}
