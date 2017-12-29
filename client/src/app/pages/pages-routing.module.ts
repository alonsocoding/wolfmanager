import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule',
  }, {
    path: 'tasks',
    loadChildren: './tasks/tasks.module#TasksModule',
  }, {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarModule',
  }, {
    path: 'files',
    loadChildren: './files/files.module#FilesModule',
  }, {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule',
  }, {
    path: 'finances',
    loadChildren: './finances/finances.module#FinancesModule',
  }, {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
  }, {
    path: 'settings',
    component: SettingsComponent,
  }, {
    path: 'database',
    component: DatabaseComponent,
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
