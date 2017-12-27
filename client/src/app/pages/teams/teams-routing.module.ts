import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsComponent } from './teams.component';
import { TeamRolesComponent } from './teamroles/teamroles.component';
import { MembersComponent } from './members/members.component';
import { TeamMembersComponent } from './teams/teammembers.component';


const routes: Routes = [{
  path: '',
  component: TeamsComponent,
  children: [{
    path: 'teamroles',
    component: TeamRolesComponent,
  }, {
    path: 'members',
    component: MembersComponent,
  }, {
    path: 'teammembers',
    component: TeamMembersComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule { }

export const routedComponents = [
  TeamsComponent,
  TeamRolesComponent,
  MembersComponent,
  TeamMembersComponent
];
