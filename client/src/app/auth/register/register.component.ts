/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import swal from 'sweetalert2';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  providers: [UserService],
  template: `
  <img src="../../../assets/images/wolf.png" class="img-icon"/> <br>
      <h2 class="title">Sign Up to Wolf Manager</h2>
      <form (ngSubmit)="register()" #form="ngForm">

      <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">First Name</label>
      <div class="col-sm-9">
        <input [(ngModel)]="user_register.first_name" name="title" type="name" class="form-control" id="inputFinanceCategory2" placeholder="Enter your first name">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">Last Name</label>
      <div class="col-sm-9">
        <input [(ngModel)]="user_register.last_name" name="title" type="name" class="form-control" id="inputFinanceCategory3" placeholder="Enter your last name">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputTitle" class="col-sm-3 col-form-label">Username</label>
      <div class="col-sm-9">
        <input [(ngModel)]="user_register.username" name="title" type="name" class="form-control" id="inputFinanceCategory4" placeholder="Enter your username">
      </div>
    </div>

        <div class="form-group row">
        <label for="inputTitle" class="col-sm-3 col-form-label">Email</label>
      <div class="col-sm-9">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user_register.email" id="input-email" #email="ngModel"
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
          <input name="password" [(ngModel)]="user_register.password" type="password" id="input-password"
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
            name="rePass" [(ngModel)]="confirmPassword" type="password" id="input-re-password"
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
        <input [(ngModel)]="user_register.role" name="title" type="name" class="form-control" id="inputFinanceCategory5" placeholder="Enter your role">
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
  
  public user_register: User;

  constructor(private _userService: UserService,
    private _router: Router) {
    this.user_register = new User('','','','','','');
  }

  register(): void {
    this._userService.insert(this.user_register).subscribe(
      response => {
        let user = response.user;
        swal({
          type: 'success',
          title: 'Sign Up Success',
          showConfirmButton: false,
        })
        if (!user) { } else {
          this.user_register = user;
          this.user_register = new User('', '','','','','');
        }
      },
      error => { }
    );
  }

  getConfigValue(key: string): any {
  }
}
