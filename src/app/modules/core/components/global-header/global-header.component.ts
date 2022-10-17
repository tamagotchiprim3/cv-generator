import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS_PATH } from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent {
  public user: string;

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('name');
  }

  public changeLanguage(): void {
    this.translate.use(this.translate.currentLang === 'en' ? 'ru' : 'en');
  }

  public back(): void {
    this.router.navigate([PROJECTS_PATH.path]);
  }
}
