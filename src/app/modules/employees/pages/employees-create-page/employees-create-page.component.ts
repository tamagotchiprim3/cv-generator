import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { EMPLOYEES_CREATE_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import { EMPLOYEES_CREATE_PATH } from 'src/app/shared/constants/routing-path.const';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import {
  clearBreadcrumbs,
  pushToBreadcrumbs,
} from 'src/app/store/breadcrumbs/breadcrumbs.action';

@Component({
  selector: 'app-employees-create-page',
  templateUrl: './employees-create-page.component.html',
  styleUrls: ['./employees-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesCreatePageComponent implements OnInit, OnDestroy {
  public spinnerCount: number = 0;

  constructor(private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.store.dispatch(clearBreadcrumbs({ data: 1 }));
  }

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: EMPLOYEES_CREATE_BREADCRUMB,
      })
    );
    this.store.select(selectSpinnerCount).subscribe((data) => {
      this.spinnerCount = data;
      this.cdR.markForCheck();
    });
  }
}
