import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TasksRoutingModule, routedComponents } from './tasks-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbdModalContent } from './all-tasks/all-tasks.component';
import { NgbdModalContent2 } from './my-tasks/my-tasks.component';

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
    NgbdModalContent,
    NgbdModalContent2
  ],
  entryComponents: [
    NgbdModalContent,
    NgbdModalContent2
  ],
  providers: [
    SmartTableService,
  ],
})
export class TasksModule { }
