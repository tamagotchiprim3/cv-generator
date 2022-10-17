import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import {
  DASHBOARD_PATH,
  EMPLOYEES_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  public isCollapsed = false;
  public dashboard_path = DASHBOARD_PATH.path;
  public employees_path = EMPLOYEES_PATH.path;
  public projects_path = PROJECTS_PATH.path;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
