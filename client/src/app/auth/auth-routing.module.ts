import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxAuthComponent } from './auth.component';
import { NgxAuthBlockComponent } from './auth-block/auth-block.component';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NgxRequestPasswordComponent } from './request-password/request-password.component';
import { NgxResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [{
  path: '',
  component: NgxAuthComponent,
  children: [{
    path: 'login',
    component: NgxLoginComponent,
  }, {
    path: 'register',
    component: NgxRegisterComponent,
  }, {
    path: 'request-password',
    component: NgxRequestPasswordComponent,
  }, {
    path: 'reset-password',
    component: NgxResetPasswordComponent,
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthsRoutingModule { }

export const routedComponents = [
    NgxAuthComponent,
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent
];
