import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import {
  PROJECTS_EDIT_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';
import {
  clearBreadcrumbs,
  pushToBreadcrumbs,
} from 'src/app/store/breadcrumbs/breadcrumbs.action';
import {
  getProjects,
  updateProject,
} from 'src/app/store/projects/projects.actions';
import { selectProjectsList } from 'src/app/store/projects/projects.selectors';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit-page.component.html',
  styleUrls: ['./projects-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsEditComponent implements OnInit, OnDestroy {
  public spinnerCount: number = 0;
  public project: IProject;
  public id: string;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.store.dispatch(clearBreadcrumbs({ data: 1 }));
  }

  ngOnInit(): void {
    this.store.select(selectSpinnerCount).subscribe((data) => {
      this.spinnerCount = data;
      this.cdR.markForCheck();
    });

    const id = this.route.snapshot.queryParams['id'];
    this.store.dispatch(getProjects());
    this.store
      .select(selectProjectsList)
      .pipe(
        map((data) => {
          return cloneDeep(data).find((item) => item.id === id);
        })
      )
      .subscribe((data) => {
        this.project = data;
        this.cdR.markForCheck();
      });
    this.store.dispatch(
      pushToBreadcrumbs({
        data: {
          breadcrumbName: `${this.project.name}`,
          title: `Edit ${this.project.name} project`,
          description: 'Edit your projects here',
          url: PROJECTS_EDIT_PATH.path,
        },
      })
    );
  }

  public submit(data: IProject): void {
    this.store.dispatch(updateProject({ data }));
    this.router.navigate([PROJECTS_PATH.path]);
  }

  public cancel(): void {
    this.router.navigate([PROJECTS_PATH.path]);
  }
}
