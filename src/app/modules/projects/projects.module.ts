import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { ProjectsCreateComponent } from './pages/projects-create-page/projects-create-page.component';
import { ProjectsEditComponent } from './pages/projects-edit-page/projects-edit-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TextInputModule } from 'src/app/shared/components/controls/text-input/text-input.module';
import { DateInputModule } from 'src/app/shared/components/controls/date-input/date-input.module';
import { NumberInputModule } from 'src/app/shared/components/controls/number-input/number-input.module';
import { TextareaInputModule } from 'src/app/shared/components/controls/textarea-input/textarea-input.module';
import { TreeSelectInputModule } from 'src/app/shared/components/controls/tree-select-input/tree-select-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ProjectFormComponent } from './components/project-form/project-form.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BaseTableModule,
    NzButtonModule,
    TextInputModule,
    DateInputModule,
    NumberInputModule,
    TextareaInputModule,
    TreeSelectInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzSpinModule,
    TranslateModule,
  ],
  declarations: [
    ProjectsPageComponent,
    ProjectsCreateComponent,
    ProjectsEditComponent,
    ProjectFormComponent,
  ],
})
export class ProjectsModule {}
