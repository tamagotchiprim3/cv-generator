import { NgModule } from '@angular/core';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    CorePageComponent,
    GlobalHeaderComponent,
    SideBarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    NzDividerModule,
    NzLayoutModule,
    NzSpinModule,
    NzBreadCrumbModule,
    TranslateModule,
  ],
})
export class CoreModule {}
