import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { MyNotesComponent } from './my-notes/my-notes.component';


const routes: Routes = [{
  path: '',
  component: NotesComponent,
  children: [{
    path: 'my-notes',
    component: MyNotesComponent,
  }, {
    path: 'all-notes',
    component: AllNotesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule { }

export const routedComponents = [
  NotesComponent,
  AllNotesComponent,
  MyNotesComponent
]
