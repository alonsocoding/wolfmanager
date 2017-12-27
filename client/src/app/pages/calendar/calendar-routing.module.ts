import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendar.component';
import { AllEventsComponent } from './all-events/all-events.component';

const routes: Routes = [{
  path: '',
  component: CalendarsComponent,
  children: [{
    path: 'all-events',
    component: AllEventsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }

export const routedComponents = [
    CalendarsComponent,
    AllEventsComponent,
];
