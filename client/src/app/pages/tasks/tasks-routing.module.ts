import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

const routes: Routes = [{
  path: '',
  component: TasksComponent,
  children: [{
    path: 'all-tasks',
    component: AllTasksComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }

export const routedComponents = [
  TasksComponent,
  AllTasksComponent
];
