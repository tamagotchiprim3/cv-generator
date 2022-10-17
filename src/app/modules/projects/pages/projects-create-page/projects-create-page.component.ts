import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PROJECT_CREATE_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import {
  PROJECTS_CREATE_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import {
  clearBreadcrumbs,
  pushToBreadcrumbs,
} from 'src/app/store/breadcrumbs/breadcrumbs.action';
import { addProjects } from 'src/app/store/projects/projects.actions';
import { selectProjectsList } from 'src/app/store/projects/projects.selectors';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create-page.component.html',
  styleUrls: ['./projects-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsCreateComponent implements OnInit, OnDestroy {
  public spinnerCount: number = 0;
  constructor(
    private store: Store,
    private router: Router,
    private cdR: ChangeDetectorRef
  ) {}
  ngOnDestroy(): void {
    this.store.dispatch(clearBreadcrumbs({ data: 1 }));
  }

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: PROJECT_CREATE_BREADCRUMB,
      })
    );
    this.store.select(selectSpinnerCount).subscribe((data) => {
      this.spinnerCount = data;
      this.cdR.markForCheck();
    });
  }

  public submit(data: IProject): void {
    this.store.dispatch(addProjects({ data }));
    this.store.select(selectProjectsList);
    this.router.navigate([PROJECTS_PATH.path]);
  }

  public cancel(): void {
    this.router.navigate([PROJECTS_PATH.path]);
  }
}
