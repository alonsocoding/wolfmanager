import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TasksRoutingModule, routedComponents } from './tasks-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbdModalContent } from './all-tasks/all-tasks.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    TasksRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    ...components,
    NgbdModalContent
  ],
  entryComponents: [
    NgbdModalContent
  ],
  providers: [
    SmartTableService,
  ],
})
export class TasksModule { }
