import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS_EDIT_PATH } from '../../constants/routing-path.const';
import { IColumn } from '../../interfaces/column.interface';
import { IProject } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent implements AfterContentChecked {
  @Input() public type: string;
  @Input() public data: any;
  @Input() public columns: IColumn[];
  @Output() private redirectEvent = new EventEmitter<string>();

  constructor(private cdR: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.cdR.markForCheck();
  }
  public redirectToEdit(row: any): void {
    this.redirectEvent.emit(row.id);
  }

  public trackByFn(index: any, item: any): any {
    return index;
  }
}
