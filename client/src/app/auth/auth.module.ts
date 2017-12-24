import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { AuthsRoutingModule, routedComponents } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
];

@NgModule({
  imports: [
    ThemeModule,
    AuthsRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
  providers: [
  ],
})
export class AuthModule { }
