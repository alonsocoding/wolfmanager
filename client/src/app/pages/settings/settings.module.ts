import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingsComponent } from './settings.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxChartsModule,
    ChartModule
  ],
  declarations: [
    SettingsComponent
  ],
})
export class SettingsModule { }
