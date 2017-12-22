import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { CategoryComponent } from './categories/categories.component';

const routes: Routes = [{
  path: '',
  component: ProjectsComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  }, {
    path: 'my-project',
    component: MyProjectComponent,
  }, {
    path: 'categories',
    component: CategoryComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }

export const routedComponents = [
  ProjectsComponent,
  SmartTableComponent,
  MyProjectComponent,
  CategoryComponent
];
