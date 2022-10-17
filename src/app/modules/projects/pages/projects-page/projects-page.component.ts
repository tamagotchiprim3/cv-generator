import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map, Observable } from 'rxjs';
import { PROJECT_PAGE_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import {
  PROJECTS_CREATE_PATH,
  PROJECTS_EDIT_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import {
  clearBreadcrumbs,
  pushToBreadcrumbs,
} from 'src/app/store/breadcrumbs/breadcrumbs.action';
import { getProjects } from 'src/app/store/projects/projects.actions';
import { selectProjectsList } from 'src/app/store/projects/projects.selectors';
import { PROJECT_COLUMNS } from './constants/column.const';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent implements OnInit {
  public pageType: string = 'projects';
  public spinnerCount: number = 0;
  public apiData: Observable<IProject[]>;
  public readonly tableColumns = PROJECT_COLUMNS;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      pushToBreadcrumbs({
        data: PROJECT_PAGE_BREADCRUMB,
      })
    );
    this.store
      .select(selectSpinnerCount)
      .subscribe((data) => (this.spinnerCount = data));

    this.store.dispatch(getProjects());
    this.apiData = this.store
      .select(selectProjectsList)
      .pipe(map((data) => cloneDeep(data)));
  }

  public redirectToAdd(): void {
    this.router.navigate([PROJECTS_PATH.path, PROJECTS_CREATE_PATH.path]);
  }

  public redirectToEdit(id: string) {
    this.router.navigate([PROJECTS_PATH.path, PROJECTS_EDIT_PATH.path, id], {
      queryParams: {
        id: id,
      },
    });
  }
}
