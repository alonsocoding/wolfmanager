/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgxAuthBlockComponent } from '../auth-block/auth-block.component';
import swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'nb-login',
  providers: [UserService],
  template: `
      <img src="../../../assets/images/wolf.png" class="img-icon"/> <br>
      <h2 class="title">Sign In to Wolf Manager</h2>

      <form (ngSubmit)="login()" #form="ngForm" autocomplete="nope">

        <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
             class="alert alert-danger" role="alert">
          <div><strong>Oh snap!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>

        <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
             class="alert alert-success" role="alert">
          <div><strong>Hooray!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user.email" id="input-email" pattern=".+@.+\..+"
                 class="form-control" placeholder="Email address" #email="ngModel"
                 [class.form-control-danger]="email.invalid && email.touched" autofocus
                 [required]="getConfigValue('forms.validation.email.required')">
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            Email is required!
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <div class="form-group">
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
          </small>
        </div>

        <div class="form-group accept-group col-sm-12">
          <nb-checkbox name="rememberMe" [(ngModel)]="user.rememberMe">Remember me</nb-checkbox>
          <a class="forgot-password" routerLink="../request-password">Forgot Password?</a>
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-info"
                [class.btn-pulse]="submitted">
          Sign In
        </button>
      </form>

      <div class="links">

        <small class="form-text">
          Don't have an account? <a routerLink="../register"><strong>Sign Up</strong></a>
        </small>
      </div>
  `,
})
export class NgxLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  errors: string[] = [];
  messages: string[] = [];
  submitted: boolean = false;

  public user: User;

  constructor(private _userService: UserService,
    private _router: Router) {
    this.user = new User('','','','','','');
  }

  login(): void {
    this._userService.login(this.user).subscribe(
      response => { console.log(response);
        if (!response) { 
          swal({
            type: 'error',
            title: 'The identity is incorrect',
          })
        } else {
          let user = response;
          if(this.user.password == user.password) {
            localStorage.setItem('identity', JSON.stringify(user));
            this._router.navigate(['../../pages/dashboard']);
            this.user = user;
          } else {
            swal({
              type: 'error',
              title: 'The password is incorrect',
            })
          }
          
        }
      },
      error => { 
        swal({
          type: 'error',
          title: 'The email is incorrect',
        })
      }
    );
    console.log(this.user);
  }

  getConfigValue(key: string): any {

  }
}
