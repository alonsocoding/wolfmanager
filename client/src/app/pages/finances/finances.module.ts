import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FinancesRoutingModule, routedComponents } from './finances-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbdModalContent } from './categories/categories.component';
import { NgbdModalContent2 } from './all-finances/all-finances.component';
import { NgbdModalContent3 } from './my-finances/my-finances.component';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    FinancesRoutingModule,
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
export class FinancesModule { }
