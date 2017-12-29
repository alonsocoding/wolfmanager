import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectsModule } from './projects/projects.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { TasksModule } from './tasks/tasks.module';
import { CalendarModule } from './calendar/calendar.module';
import { FilesModule } from './files/files.module';
import { TeamsModule } from './teams/teams.module';
import { SettingsModule } from './settings/settings.module';
import { DatabaseModule } from './database/database.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ProjectsModule,
    TasksModule,
    CalendarModule,
    FilesModule,
    TeamsModule,
    SettingsModule,
    DatabaseModule

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
