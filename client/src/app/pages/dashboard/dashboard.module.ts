import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TeamComponent } from './team/team.component';
import { SolarComponent } from './solar/solar.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChartjsLineComponent } from './chartjs/chartjs-line.component';
import { ChartjsPieComponent } from './chartjs/chartjs-pie.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxChartsModule,
    ChartModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TeamComponent,
    SolarComponent,
    TasksComponent,
    ChartjsLineComponent,
    ChartjsPieComponent
  ],
})
export class DashboardModule { }
