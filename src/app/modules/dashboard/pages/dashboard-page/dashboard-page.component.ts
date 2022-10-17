import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DASHBOARD_PAGE_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import { DASHBOARD_PATH } from 'src/app/shared/constants/routing-path.const';
import { pushToBreadcrumbs } from 'src/app/store/breadcrumbs/breadcrumbs.action';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: DASHBOARD_PAGE_BREADCRUMB,
      })
    );
  }
}
