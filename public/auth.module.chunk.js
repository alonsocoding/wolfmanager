webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__ = __webpack_require__("../../../../../src/app/auth/request-password/request-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* NgxAuthComponent */],
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* NgxLoginComponent */],
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* NgxRegisterComponent */],
            }, {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__["a" /* NgxRequestPasswordComponent */],
            }, {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a" /* NgxResetPasswordComponent */],
            }, {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            }],
    }];
var AuthsRoutingModule = (function () {
    function AuthsRoutingModule() {
    }
    return AuthsRoutingModule;
}());
AuthsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], AuthsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* NgxAuthComponent */],
    __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* NgxLoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* NgxRegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__request_password_request_password_component__["a" /* NgxRequestPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a" /* NgxResetPasswordComponent */]
];
//# sourceMappingURL=auth-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n  padding: 2.5rem; }\n\n:host /deep/ nb-card {\n  height: calc(100vh - 2 * 2.5rem); }\n\n:host /deep/ strong, :host /deep/ a {\n  color: #4ca6ff; }\n\n:host /deep/ nb-card {\n  margin: 0;\n  margin: 0 auto;\n  max-width: 400px; }\n\n:host /deep/ .img-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 98px;\n  width: 118px; }\n\n:host /deep/ .flex-centered {\n  margin: auto; }\n\n:host /deep/ nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ form {\n  width: 100%; }\n\n:host /deep/ .alert {\n  text-align: center; }\n\n:host /deep/ .title {\n  margin-bottom: 0.75rem;\n  text-align: center; }\n\n:host /deep/ .sub-title {\n  margin-bottom: 2rem;\n  text-align: center; }\n\n:host /deep/ .checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n  font-weight: normal; }\n\n:host /deep/ .form-group.accept-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 2rem 0; }\n  :host /deep/ .form-group.accept-group .forgot-password {\n    line-height: 2; }\n\n:host /deep/ .links {\n  text-align: center;\n  margin-top: 1.75rem; }\n  :host /deep/ .links .socials {\n    margin: 1.5rem 0 2.5rem; }\n  :host /deep/ .links .socials a {\n    font-size: 2rem;\n    margin: 0 1rem;\n    text-decoration: none; }\n\n@media (max-width: 550px) {\n  :host /deep/ /deep/ nb-layout .layout .layout-container .content .columns nb-layout-column {\n    padding: 0; }\n  :host /deep/ nb-card {\n    border-radius: 0;\n    height: 100vh; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var NgxAuthComponent = (function () {
    // showcase of how to use the onAuthenticationChange method
    function NgxAuthComponent() {
        this.authenticated = false;
        this.token = '';
    }
    NgxAuthComponent.prototype.ngOnDestroy = function () {
    };
    return NgxAuthComponent;
}());
NgxAuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-auth',
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-column>\n      <div class=\"flex-centered col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n              <h3>Demo Credentials: </h3>\n                  <p>Email: admin@admin.com</p>\n                  <p>Password: admin</p>\n            </div>\n        <nb-card>\n          <nb-card-body>\n            <div class=\"flex-centered col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n              <router-outlet></router-outlet>\n            </div>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n  ",
    }),
    __metadata("design:paramtypes", [])
], NgxAuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var components = [];
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["b" /* routedComponents */].concat(components),
        providers: [],
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NgxLoginComponent = (function () {
    function NgxLoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.submitted = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_User__["a" /* User */]('', '', '', '', '', '');
    }
    NgxLoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user).subscribe(function (response) {
            console.log(response);
            if (!response) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    type: 'error',
                    title: 'The identity is incorrect',
                    showConfirmButton: false,
                });
            }
            else {
                var user = response;
                if (_this.user.password == user.password) {
                    localStorage.setItem('identity', JSON.stringify(user));
                    _this._router.navigate(['../../pages/dashboard']);
                    _this.user = user;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                        type: 'error',
                        title: 'The password is incorrect',
                        showConfirmButton: false,
                    });
                }
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'error',
                title: 'The email is incorrect',
                showConfirmButton: false,
            });
        });
        console.log(this.user);
    };
    NgxLoginComponent.prototype.getConfigValue = function (key) {
    };
    return NgxLoginComponent;
}());
NgxLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-login',
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]],
        template: "\n      <img src=\"../../../assets/images/wolf.png\" class=\"img-icon\"/> <br>\n      <h2 class=\"title\">Sign In to Wolf Manager</h2>\n\n      <form (ngSubmit)=\"login()\" #form=\"ngForm\" autocomplete=\"nope\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" pattern=\".+@.+..+\"\n                 class=\"form-control\" placeholder=\"Email address\" #email=\"ngModel\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\" autofocus\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group accept-group col-sm-12\">\n          <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\">Remember me</nb-checkbox>\n          <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-info\"\n                [class.btn-pulse]=\"submitted\">\n          Sign In\n        </button>\n      </form>\n\n      <div class=\"links\">\n\n        <small class=\"form-text\">\n          Don't have an account? <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NgxLoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .title {\n  margin-bottom: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var NgxRegisterComponent = (function () {
    function NgxRegisterComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]('', '', '', '', '', '');
    }
    NgxRegisterComponent.prototype.register = function () {
        var _this = this;
        this._userService.insert(this.user_register).subscribe(function (response) {
            var user = response.user;
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'success',
                title: 'Sign Up Success',
                showConfirmButton: false,
            });
            if (!user) { }
            else {
                _this.user_register = user;
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]('', '', '', '', '', '');
            }
        }, function (error) { });
    };
    NgxRegisterComponent.prototype.getConfigValue = function (key) {
    };
    return NgxRegisterComponent;
}());
NgxRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-register',
        styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]],
        template: "\n  <img src=\"../../../assets/images/wolf.png\" class=\"img-icon\"/> <br>\n      <h2 class=\"title\">Sign Up to Wolf Manager</h2>\n      <form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n      <div class=\"form-group row\">\n      <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">First Name</label>\n      <div class=\"col-sm-9\">\n        <input [(ngModel)]=\"user_register.first_name\" name=\"title\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory2\" placeholder=\"Enter your first name\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Last Name</label>\n      <div class=\"col-sm-9\">\n        <input [(ngModel)]=\"user_register.last_name\" name=\"title\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory3\" placeholder=\"Enter your last name\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Username</label>\n      <div class=\"col-sm-9\">\n        <input [(ngModel)]=\"user_register.username\" name=\"title\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory4\" placeholder=\"Enter your username\">\n      </div>\n    </div>\n\n        <div class=\"form-group row\">\n        <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Email</label>\n      <div class=\"col-sm-9\">\n          <label for=\"input-email\" class=\"sr-only\">Email address</label>\n          <input name=\"email\" [(ngModel)]=\"user_register.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\">\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n        <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Password</label>\n      <div class=\"col-sm-9\">\n          <label for=\"input-password\" class=\"sr-only\">Password</label>\n          <input name=\"password\" [(ngModel)]=\"user_register.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control\" placeholder=\"Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\">\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{ getConfigValue('forms.validation.password.minLength') }}\n            to {{ getConfigValue('forms.validation.password.maxLength') }}\n            characters\n          </small></div>\n        </div>\n\n        <div class=\"form-group row\">\n        <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Confirm Password</label>\n      <div class=\"col-sm-9\">\n          <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small></div>\n        </div>\n\n        <div class=\"form-group row\">\n      <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Role</label>\n      <div class=\"col-sm-9\">\n        <input [(ngModel)]=\"user_register.role\" name=\"title\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory5\" placeholder=\"Enter your role\">\n      </div>\n    </div>\n\n        <div class=\"form-group accept-group col-sm-12\" *ngIf=\"getConfigValue('forms.register.terms')\">\n          <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n            Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n          </nb-checkbox>\n        </div>\n\n        <button [disabled]=\"submitted || !form.valid\" class=\"btn btn-block btn-hero-info\"\n                [class.btn-pulse]=\"submitted\">\n          Register\n        </button>\n      </form>\n\n      <div class=\"links\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign in</strong></a>\n        </small>\n      </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NgxRegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/request-password/request-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/request-password/request-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxRequestPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var NgxRequestPasswordComponent = (function () {
    function NgxRequestPasswordComponent() {
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    NgxRequestPasswordComponent.prototype.requestPass = function () {
    };
    NgxRequestPasswordComponent.prototype.getConfigValue = function (key) {
    };
    return NgxRequestPasswordComponent;
}());
NgxRequestPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-request-password-page',
        styles: [__webpack_require__("../../../../../src/app/auth/request-password/request-password.component.scss")],
        template: "\n  <img src=\"../../../assets/images/wolf.png\" class=\"img-icon\"/> <br>\n      <h2 class=\"title\">Forgot Password</h2>\n      <small class=\"form-text sub-title\">Enter your email adress and we\u2019ll send a link to reset your password</small>\n      <form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\">\n\n        <div *ngIf=\"showMessages.error && errors && errors.length > 0 && !submitted\"\n             class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"showMessages.success && messages && messages.length > 0 && !submitted\"\n             class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-email\" class=\"sr-only\">Enter your email address</label>\n          <input name=\"email\" [(ngModel)]=\"user.email\" id=\"input-email\" #email=\"ngModel\"\n                 class=\"form-control\" placeholder=\"Email address\" pattern=\".+@.+..+\"\n                 [class.form-control-danger]=\"email.invalid && email.touched\"\n                 [required]=\"getConfigValue('forms.validation.email.required')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"email.invalid && email.touched && email.errors?.required\">\n            Email is required!\n          </small>\n          <small class=\"form-text error\"\n                 *ngIf=\"email.invalid && email.touched && email.errors?.pattern\">\n            Email should be the real one!\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !requestPassForm.form.valid\" class=\"btn btn-hero-info btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Request password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], NgxRequestPasswordComponent);

//# sourceMappingURL=request-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host .form-group:last-of-type {\n  margin-bottom: 3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var NgxResetPasswordComponent = (function () {
    function NgxResetPasswordComponent() {
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    NgxResetPasswordComponent.prototype.resetPass = function () {
    };
    NgxResetPasswordComponent.prototype.getConfigValue = function (key) {
    };
    return NgxResetPasswordComponent;
}());
NgxResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nb-reset-password-page',
        styles: [__webpack_require__("../../../../../src/app/auth/reset-password/reset-password.component.scss")],
        template: "\n  <img src=\"../../../assets/images/wolf.png\" class=\"img-icon\"/> <br>\n      <h2 class=\"title\">Change password</h2>\n      <small class=\"form-text sub-title\">Please enter a new password</small>\n      <form (ngSubmit)=\"resetPass()\" #resetPassForm=\"ngForm\">\n\n        <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n          <div><strong>Oh snap!</strong></div>\n          <div *ngFor=\"let error of errors\">{{ error }}</div>\n        </div>\n        <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n          <div><strong>Hooray!</strong></div>\n          <div *ngFor=\"let message of messages\">{{ message }}</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-password\" class=\"sr-only\">New Password</label>\n          <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\"\n                 class=\"form-control form-control-lg first\" placeholder=\"New Password\" #password=\"ngModel\"\n                 [class.form-control-danger]=\"password.invalid && password.touched\"\n                 [required]=\"getConfigValue('forms.validation.password.required')\"\n                 [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n                 [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n                 autofocus>\n          <small class=\"form-text error\" *ngIf=\"password.invalid && password.touched && password.errors?.required\">\n            Password is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)\">\n            Password should contains\n            from {{getConfigValue('forms.validation.password.minLength')}}\n            to {{getConfigValue('forms.validation.password.maxLength')}}\n            characters\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\n          <input\n            name=\"rePass\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\"\n            class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\" #rePass=\"ngModel\"\n            [class.form-control-danger]=\"(rePass.invalid || password.value != rePass.value) && rePass.touched\"\n            [required]=\"getConfigValue('forms.validation.password.required')\">\n          <small class=\"form-text error\"\n                 *ngIf=\"rePass.invalid && rePass.touched && rePass.errors?.required\">\n            Password confirmation is required!\n          </small>\n          <small\n            class=\"form-text error\"\n            *ngIf=\"rePass.touched && password.value != rePass.value && !rePass.errors?.required\">\n            Password does not match the confirm password.\n          </small>\n        </div>\n\n        <button [disabled]=\"submitted || !resetPassForm.form.valid\" class=\"btn btn-hero-info btn-block\"\n                [class.btn-pulse]=\"submitted\">\n          Change password\n        </button>\n      </form>\n\n      <div class=\"links col-sm-12\">\n        <small class=\"form-text\">\n          Already have an account? <a routerLink=\"../login\"><strong>Sign In</strong></a>\n        </small>\n        <small class=\"form-text\">\n          <a routerLink=\"../register\"><strong>Sign Up</strong></a>\n        </small>\n      </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], NgxResetPasswordComponent);

//# sourceMappingURL=reset-password.component.js.map

/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map