import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TeamsRoutingModule, routedComponents } from './teams-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbdModalContent } from './members/members.component';
import { NgbdModalContent2 } from './teams/teammembers.component';
import { NgbdModalContent3 } from './teamroles/teamroles.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    TeamsRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    ...components,
    NgbdModalContent,
    NgbdModalContent2,
    NgbdModalContent3
  ],
  entryComponents: [
    NgbdModalContent,
    NgbdModalContent2,
    NgbdModalContent3
  ],
  providers: [
    SmartTableService,
  ],
})
export class TeamsModule { }
