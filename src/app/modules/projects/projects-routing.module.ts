import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PROJECTS_CREATE_PATH,
  PROJECTS_EDIT_PATH,
  PROJECTS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { ProjectsCreateComponent } from './pages/projects-create-page/projects-create-page.component';
import { ProjectsEditComponent } from './pages/projects-edit-page/projects-edit-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  {
    path: `${PROJECTS_EDIT_PATH.path}/:id`,
    component: ProjectsEditComponent,
  },
  {
    path: PROJECTS_CREATE_PATH.path,
    component: ProjectsCreateComponent,
  },
  { path: '**', redirectTo: PROJECTS_PATH.path },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
