/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  template: `
  <img src="../../../assets/images/wolf.png" class="img-icon"/> <br>
      <h2 class="title">Sign Up to Wolf Manager</h2>
      <form (ngSubmit)="register()" #form="ngForm">

      <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">First Name</label>
      <div class="col-sm-9">
        <input name="title" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter your first name">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">Last Name</label>
      <div class="col-sm-9">
        <input name="title" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter your last name">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">Username</label>
      <div class="col-sm-9">
        <input name="title" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter your username">
      </div>
    </div>

        <div class="form-group row">
        <label for="inputTitle" class="col-sm-3 col-form-label">Email</label>
      <div class="col-sm-9">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user.email" id="input-email" #email="ngModel"
                 class="form-control" placeholder="Email address" pattern=".+@.+\..+"
                 [class.form-control-danger]="email.invalid && email.touched"
                 [required]="getConfigValue('forms.validation.email.required')">
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            Email is required!
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
          </div>
        </div>

        <div class="form-group row">
        <label for="inputTitle" class="col-sm-3 col-form-label">Password</label>
      <div class="col-sm-9">
          <label for="input-password" class="sr-only">Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control" placeholder="Password" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="getConfigValue('forms.validation.password.required')"
                 [minlength]="getConfigValue('forms.validation.password.minLength')"
                 [maxlength]="getConfigValue('forms.validation.password.maxLength')">
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            Password is required!
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            Password should contains
            from {{ getConfigValue('forms.validation.password.minLength') }}
            to {{ getConfigValue('forms.validation.password.maxLength') }}
            characters
          </small></div>
        </div>

        <div class="form-group row">
        <label for="inputTitle" class="col-sm-3 col-form-label">Confirm Password</label>
      <div class="col-sm-9">
          <label for="input-re-password" class="sr-only">Repeat password</label>
          <input
            name="rePass" [(ngModel)]="user.confirmPassword" type="password" id="input-re-password"
            class="form-control" placeholder="Confirm Password" #rePass="ngModel"
            [class.form-control-danger]="(rePass.invalid || password.value != rePass.value) && rePass.touched"
            [required]="getConfigValue('forms.validation.password.required')">
          <small class="form-text error"
                 *ngIf="rePass.invalid && rePass.touched && rePass.errors?.required">
            Password confirmation is required!
          </small>
          <small
            class="form-text error"
            *ngIf="rePass.touched && password.value != rePass.value && !rePass.errors?.required">
            Password does not match the confirm password.
          </small></div>
        </div>

        <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">Role</label>
      <div class="col-sm-9">
        <input name="title" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter your role">
      </div>
    </div>

        <div class="form-group accept-group col-sm-12" *ngIf="getConfigValue('forms.register.terms')">
          <nb-checkbox name="terms" [(ngModel)]="user.terms" [required]="getConfigValue('forms.register.terms')">
            Agree to <a href="#" target="_blank"><strong>Terms & Conditions</strong></a>
          </nb-checkbox>
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-info"
                [class.btn-pulse]="submitted">
          Register
        </button>
      </form>

      <div class="links">
        <small class="form-text">
          Already have an account? <a routerLink="../login"><strong>Sign in</strong></a>
        </small>
      </div>
  `,
})
export class NgxRegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor() {
  }

  register(): void {

  }

  getConfigValue(key: string): any {
  }
}
