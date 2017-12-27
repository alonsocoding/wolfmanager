import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancesComponent } from './finances.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllFinancesComponent } from './all-finances/all-finances.component';
import { MyFinancesComponent } from './my-finances/my-finances.component';


const routes: Routes = [{
  path: '',
  component: FinancesComponent,
  children: [{
    path: 'categories',
    component: CategoriesComponent,
  }, {
    path: 'all-finances',
    component: AllFinancesComponent,
  }, {
    path: 'my-finances',
    component: MyFinancesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancesRoutingModule { }

export const routedComponents = [
  FinancesComponent,
  CategoriesComponent,
  AllFinancesComponent,
  MyFinancesComponent
]
