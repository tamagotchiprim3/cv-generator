import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { DateInputModule } from 'src/app/shared/components/controls/date-input/date-input.module';
import { NumberInputModule } from 'src/app/shared/components/controls/number-input/number-input.module';
import { SelectInputModule } from 'src/app/shared/components/controls/select-input/select-input.module';
import { TextInputModule } from 'src/app/shared/components/controls/text-input/text-input.module';
import { TextareaInputModule } from 'src/app/shared/components/controls/textarea-input/textarea-input.module';
import { TreeSelectInputModule } from 'src/app/shared/components/controls/tree-select-input/tree-select-input.module';
import { UserCvEducationFormComponent } from './components/user-cv-education-form/user-cv-education-form.component';
import { UserCvGeneralFormComponent } from './components/user-cv-general-form/user-cv-general-form.component';
import { UserCvLanguagesFormComponent } from './components/user-cv-languages-form/user-cv-languages-form.component';
import { UserCvProjectFormComponent } from './components/user-cv-project-form/user-cv-project-form.component';
import { UserCvResumeFormComponent } from './components/user-cv-resume-form/user-cv-resume-form.component';
import { UserCvComponent } from './components/user-cv/user-cv.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesCreatePageComponent } from './pages/employees-create-page/employees-create-page.component';
import { EmployeesEditPageComponent } from './pages/employees-edit-page/employees-edit-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BaseTableModule,
    FormsModule,
    ReactiveFormsModule,
    SelectInputModule,
    DateInputModule,
    TreeSelectInputModule,
    TextareaInputModule,
    NumberInputModule,
    TextInputModule,
    NzButtonModule,
    NzDividerModule,
    NzTabsModule,
    NzCollapseModule,
    NzSelectModule,
    NzIconModule,
    NzSpinModule,
    NzMenuModule,
    TranslateModule,
  ],
  declarations: [
    EmployeesPageComponent,
    EmployeesCreatePageComponent,
    EmployeesEditPageComponent,
    UserCvGeneralFormComponent,
    UserCvLanguagesFormComponent,
    UserCvResumeFormComponent,
    UserCvEducationFormComponent,
    UserCvProjectFormComponent,
    UserCvComponent,
    UserFormComponent,
    UserInfoComponent,
  ],
})
export class EmployeesModule {}
