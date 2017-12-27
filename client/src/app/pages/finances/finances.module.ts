import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FinancesRoutingModule, routedComponents } from './finances-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ...components
  ],
  providers: [
    SmartTableService,
  ],
})
export class FinancesModule { }
