import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HOME_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import { pushToBreadcrumbs } from 'src/app/store/breadcrumbs/breadcrumbs.action';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent implements OnInit {
  public spinnerCount: number = 0;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: HOME_BREADCRUMB,
      })
    );
    this.store
      .select(selectSpinnerCount)
      .subscribe((data) => (this.spinnerCount = data));
  }
}
