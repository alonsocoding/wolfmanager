import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesComponent } from './files.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { MyFilesComponent } from './my-files/my-files.component';


const routes: Routes = [{
  path: '',
  component: FilesComponent,
  children: [{
    path: 'all-files',
    component: AllFilesComponent,
  }, {
    path: 'my-files',
    component: MyFilesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule { }

export const routedComponents = [
  FilesComponent,
  AllFilesComponent,
  MyFilesComponent
];
