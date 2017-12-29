import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DatabaseComponent } from './database.component';

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
    DatabaseComponent
  ],
})
export class DatabaseModule { }
