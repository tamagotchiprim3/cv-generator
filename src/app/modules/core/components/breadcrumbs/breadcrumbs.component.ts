import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep, uniq } from 'lodash';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { clearBreadcrumbs } from 'src/app/store/breadcrumbs/breadcrumbs.action';
import { selectBreadcrumbslist } from 'src/app/store/breadcrumbs/breadcrumbs.selectors';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  public breadcrumbs: IBreadcrumb[];
  constructor(private store: Store, private cdR: ChangeDetectorRef) {
    this.store.select(selectBreadcrumbslist).subscribe((data) => {
      this.breadcrumbs = data;
      this.cdR.markForCheck();
    });
  }

  public clearBreadcrumbs(index: number, item: IBreadcrumb): void {
    this.store.dispatch(
      clearBreadcrumbs({
        data: index,
      })
    );
  }

  public trackByFn(index: any, item: any): any {
    return index;
  }
}
