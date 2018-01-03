webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/dashboard/chartjs/chartjs-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_entry_service__ = __webpack_require__("../../../../../src/app/services/entry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartjsLineComponent = (function () {
    function ChartjsLineComponent(theme, _entryService) {
        var _this = this;
        this.theme = theme;
        this._entryService = _entryService;
        this.entries = new Array();
        this.incomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.expenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.total_income = 0;
        this.total_expense = 0;
        this.total = 0;
        this.getData();
        this.calculate();
        console.log(this.incomes);
        console.log(this.expenses);
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March',
                    'April', 'May', 'June', 'July',
                    'August', 'September', 'October',
                    'November', 'December'],
                datasets: [{
                        data: /*this.expenses,*/ [6500, 5900, 8000, 8100, 5600, 5500, 5700, 4200, 4100, 4600, 5000, 4000],
                        label: 'Expenses',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    }, {
                        data: /*this.incomes,*/ [2800, 4800, 4000, 1900, 8600, 2700, 9300, 4030, 1700, 8620, 2300, 3000],
                        label: 'Incomes',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.success, 0.3),
                        borderColor: colors.success,
                    }
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.calculate = function () {
        for (var i = 0; i < 12; i++) {
            this.total_income += this.incomes[i];
            this.total_expense += this.expenses[i];
        }
        this.total = this.total_income - this.total_expense;
    };
    ChartjsLineComponent.prototype.getData = function () {
        var _this = this;
        this._entryService.list().subscribe(function (response) {
            if (!response.entries) { }
            else {
                var entries = response.entries;
                _this.entries = entries;
                _this.entries.forEach(function (entry) {
                    var month = new Date(entry.createdAt);
                    switch (month.getMonth() + 1) {
                        case 1:
                            entry.amount > 0 ? _this.incomes[0] += parseInt(entry.amount) : _this.expenses[0] += parseInt(entry.amount) * -1;
                            break;
                        case 2:
                            entry.amount > 0 ? _this.incomes[1] += parseInt(entry.amount) : _this.expenses[1] += parseInt(entry.amount) * -1;
                            break;
                        case 3:
                            entry.amount > 0 ? _this.incomes[2] += parseInt(entry.amount) : _this.expenses[2] += parseInt(entry.amount) * -1;
                            break;
                        case 4:
                            entry.amount > 0 ? _this.incomes[3] += parseInt(entry.amount) : _this.expenses[3] += parseInt(entry.amount) * -1;
                            break;
                        case 5:
                            entry.amount > 0 ? _this.incomes[4] += parseInt(entry.amount) : _this.expenses[4] += parseInt(entry.amount) * -1;
                            break;
                        case 6:
                            entry.amount > 0 ? _this.incomes[5] += parseInt(entry.amount) : _this.expenses[5] += parseInt(entry.amount) * -1;
                            break;
                        case 7:
                            entry.amount > 0 ? _this.incomes[6] += parseInt(entry.amount) : _this.expenses[6] += parseInt(entry.amount) * -1;
                            break;
                        case 8:
                            entry.amount > 0 ? _this.incomes[7] += parseInt(entry.amount) : _this.expenses[7] += parseInt(entry.amount) * -1;
                            break;
                        case 9:
                            entry.amount > 0 ? _this.incomes[8] += parseInt(entry.amount) : _this.expenses[8] += parseInt(entry.amount) * -1;
                            break;
                        case 10:
                            entry.amount > 0 ? _this.incomes[9] += parseInt(entry.amount) : _this.expenses[9] += parseInt(entry.amount) * -1;
                            break;
                        case 11:
                            entry.amount > 0 ? _this.incomes[10] += parseInt(entry.amount) : _this.expenses[10] += parseInt(entry.amount) * -1;
                            break;
                        case 12:
                            entry.amount > 0 ? _this.incomes[11] += parseInt(entry.amount) : _this.expenses[11] += parseInt(entry.amount) * -1;
                            break;
                    }
                });
            }
        }, function (error) { });
    };
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsLineComponent;
}());
ChartjsLineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-line',
        template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_entry_service__["a" /* EntryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_entry_service__["a" /* EntryService */]) === "function" && _b || Object])
], ChartjsLineComponent);

var _a, _b;
//# sourceMappingURL=chartjs-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/chartjs/chartjs-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsPieComponent = (function () {
    function ChartjsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsPieComponent;
}());
ChartjsPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-pie',
        template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsPieComponent);

var _a;
//# sourceMappingURL=chartjs-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-3 col-md-6 col-lg-3\">\n    <ngx-status-card title=\"{{countProject}}\" number=\"Projects\" type=\"info\">\n      <i class=\"ion-ios-folder-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6 col-lg-3\">\n    <ngx-status-card title=\"{{countTask}}\" number=\"Tasks\" type=\"success\">\n      <i class=\"ion-ios-compose-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6 col-lg-3\">\n    <ngx-status-card title=\"{{countMember}}\" number=\"Members\" type=\"warning\">\n      <i class=\"ion-ios-people-outline\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6 col-lg-3\">\n    <ngx-status-card title=\"{{countEntry}}\" number=\"Entries\" type=\"danger\">\n      <i class=\"ion-ios-calculator-outline\"></i>\n    </ngx-status-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xxs12 col-md-12 col-lg-8\">\n    <nb-card class=\"solar-card\">\n      <nb-card-header>Finances</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-line></ngx-chartjs-line><br>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-4 infos\"><strong>{{total_income}}</strong><br><label>Total Incomes</label></div>\n            <div class=\"col-xs-12 col-md-4 infos\"><strong>{{total_expense}}</strong><br><label>Total Expenses</label></div>\n            <div class=\"col-xs-12 col-md-4 infos\"><strong>{{total}}</strong><br><label>Total Profit</label></div>\n          </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-xxs12 col-md-12 col-lg-4\">\n    <nb-card class=\"solar-card\">\n      <nb-card-header>Current Projects</nb-card-header>\n      <nb-card-body>\n        <ul>\n          <li *ngFor=\"let project of projects; let i = index\">\n            <label>{{project.name}}</label>\n            <ngb-progressbar type=\"success\" [value]=\"value[0]\" max=\"100\">{{project.progress}}</ngb-progressbar>\n            <hr>\n          </li>\n        </ul>\n        <hr>\n\n        <a href=\"#/pages/projects/smart-table\"><button class=\"btn btn-sm btn-success btn-more\">More Projects</button></a>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-xxs12 col-md-12 col-lg-4\">\n    <nb-card class=\"solar-card\">\n      <nb-card-header>Team Members</nb-card-header>\n      <nb-card-body>\n        <div class=\"contact\" *ngFor=\"let user of users\">\n          <nb-user [name]=\"user.first_name\" [title]=\"user.username\" size=\"large\"></nb-user>\n          <i class=\"i-contact nb-email\"></i>\n        </div>\n        <hr>\n        <a href=\"#/pages/teams/members\"><button class=\"btn btn-sm btn-success btn-more\">More Members</button></a>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-xxs12 col-md-12 col-lg-4\">\n    <nb-card class=\"solar-card\">\n      <nb-card-header>Current Tasks</nb-card-header>\n      <nb-card-body>\n        <ul>\n          <li *ngFor=\"let task of tasks; let i = index\">\n            <label>{{task.name}} </label>\n            <span class=\"badge badge-success rightColumn\">{{task.status}}</span>\n            <hr>\n          </li>\n        </ul>\n        <hr>\n        <a href=\"#/pages/tasks/all-tasks\"><button class=\"btn btn-sm btn-success btn-more\">More Tasks</button></a>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-xxs12 col-md-12 col-lg-4\">\n      <nb-card class=\"solar-card\">\n        <nb-card-header>Current Entries</nb-card-header>\n        <nb-card-body>\n          <ul>\n            <li *ngFor=\"let entry of entries; let i = index\">\n              <label>{{entry.title}} </label>\n              <label class=\"rightColumn\">{{entry.amount}}</label>\n              <hr>\n            </li>\n          </ul>\n          <hr>\n          <a href=\"#/pages/finances/all-finances\"><button class=\"btn btn-sm btn-success btn-more\">More Entries</button></a>\n        </nb-card-body>\n      </nb-card>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .progress {\n  height: 25px; }\n\n:host-context(.nb-theme-default) .btn-more {\n  float: right; }\n\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .rightColumn {\n  -ms-flex-item-align: right;\n      -ms-grid-row-align: right;\n      align-self: right;\n  float: right; }\n\n:host-context(.nb-theme-default) .infos {\n  text-align: center; }\n\n:host-context(.nb-theme-default) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a4abb3;\n  padding: 1rem; }\n  :host-context(.nb-theme-default) .contact:not(:last-child) {\n    border-bottom: 1px solid #ebeef2; }\n\n:host-context(.nb-theme-default) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) ul {\n  list-style-type: none; }\n\n:host-context(.nb-theme-default) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  font-size: 1.25rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .progress {\n    height: 25px; }\n  :host-context(.nb-theme-cosmic) .btn-more {\n    float: right; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n    display: block;\n    height: 456px;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n      display: block;\n      height: 100%;\n      width: 100%; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n  :host-context(.nb-theme-cosmic) nb-tabset {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 0; }\n  :host-context(.nb-theme-cosmic) .rightColumn {\n    -ms-flex-item-align: right;\n        -ms-grid-row-align: right;\n        align-self: right;\n    float: right; }\n  :host-context(.nb-theme-cosmic) .infos {\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) .contact {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a1a1e5;\n    padding: 1rem; }\n    :host-context(.nb-theme-cosmic) .contact:not(:last-child) {\n      border-bottom: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .i-contact {\n    font-size: 2rem;\n    cursor: pointer; }\n  :host-context(.nb-theme-cosmic) ul {\n    list-style-type: none; }\n  :host-context(.nb-theme-cosmic) .time {\n    font-size: 0.875rem;\n    font-weight: 300;\n    text-transform: uppercase; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .info-container {\n    margin-left: 0.875rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    font-size: 1.25rem;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-title {\n    font-size: 0.875rem;\n    font-weight: 300;\n    text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_entry_service__ = __webpack_require__("../../../../../src/app/services/entry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(_projectService, _taskService, _userService, _memberService, _entryService, themeService, modalService) {
        var _this = this;
        this._projectService = _projectService;
        this._taskService = _taskService;
        this._userService = _userService;
        this._memberService = _memberService;
        this._entryService = _entryService;
        this.themeService = themeService;
        this.modalService = modalService;
        this.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: 5
            },
            actions: {
                position: 'right',
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                icon: {
                    title: 'Icon',
                    type: 'html',
                    valuePrepareFunction: function (cell, row) {
                        return "<img src=\"../../../../assets/images/default-project.png\" width=\"31\" height=\"29\"/>";
                    }
                },
                name: {
                    title: 'Project Name',
                    type: 'string',
                },
                progres: {
                    title: 'Progress',
                    type: 'html',
                    valuePrepareFunction: function (cell, row) {
                        return "\n        <div class=\"progress-bar\" role=\"progressbar\" width=\"30\" aria-valuenow=\"32\" aria-valuemin=\"0\" aria-valuemax=\"32\">" + row.progress + "</div>";
                    }
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* LocalDataSource */]();
        this.themeName = 'default';
        this.countProject = 0;
        this.countTask = 0;
        this.countMember = 0;
        this.countEntry = 0;
        this.incomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.expenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.total_income = 0;
        this.total_expense = 0;
        this.total = 0;
        this.value = new Array;
        this.value.push(100);
        this.projects = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.entries = new Array();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
        this.countAllProject();
        this.countAllTask();
        this.countAllMember();
        this.countAllEntry();
        this.getData();
        this.getTaskData();
        this.getUserData();
        this.getEntryData();
    }
    DashboardComponent.prototype.sendProject = function () {
        this.router.navigate(['#/pages/projects/smart-table']);
    };
    DashboardComponent.prototype.getEntryData = function () {
        var _this = this;
        this._entryService.list().subscribe(function (response) {
            if (!response.entries) { }
            else {
                var entries = response.entries;
                _this.entries = entries;
                _this.entries.forEach(function (entry) {
                    parseInt(entry.amount) > 0 ? _this.total_income += parseInt(entry.amount) : _this.total_expense += parseInt(entry.amount);
                });
                _this.total = _this.total_income + _this.total_expense;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.getUserData = function () {
        var _this = this;
        this._userService.list().subscribe(function (response) {
            if (!response.users) { }
            else {
                var users = response.users;
                _this.users = users;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.getTaskData = function () {
        var _this = this;
        this._taskService.list().subscribe(function (response) {
            if (!response.tasks) { }
            else {
                var tasks = response.tasks;
                _this.tasks = tasks;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this._projectService.list().subscribe(function (response) {
            if (!response.projects) { }
            else {
                _this.source.load(response.projects);
                var projects = response.projects;
                _this.projects = projects;
                for (var i = 0; i < projects.size; i++) {
                    _this.value.push(projects[i].progress);
                }
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.init = function (colors) {
        this.btn_settings = [{
                class: 'btn-hero-info',
                container: 'info-container',
                title: 'Info Button',
                buttonTitle: 'Info',
                default: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.info + ", -5deg)",
                },
            }];
    };
    DashboardComponent.prototype.countAllProject = function () {
        var _this = this;
        this._projectService.count().subscribe(function (response) {
            if (!response.count) {
                console.log("asd");
            }
            else {
                console.log(response.count);
                var result = response.count;
                _this.countProject = result;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.countAllTask = function () {
        var _this = this;
        this._taskService.count().subscribe(function (response) {
            if (!response.count) {
                console.log("asd");
            }
            else {
                var result = response.count;
                _this.countTask = result;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.countAllMember = function () {
        var _this = this;
        this._memberService.count().subscribe(function (response) {
            if (!response.count) {
                console.log("asd");
            }
            else {
                var result = response.count;
                _this.countMember = result;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.countAllEntry = function () {
        var _this = this;
        this._entryService.count().subscribe(function (response) {
            if (!response.count) {
                console.log("asd");
            }
            else {
                var result = response.count;
                _this.countEntry = result;
            }
        }, function (error) { });
    };
    DashboardComponent.prototype.editProject = function () {
        console.log("edit");
    };
    DashboardComponent.prototype.deleteProject = function () {
        console.log("delete");
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dashboard',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_entry_service__["a" /* EntryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__nebular_theme__["o" /* NbThemeService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_team_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__solar_solar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chartjs_chartjs_line_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs/chartjs-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chartjs_chartjs_pie_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/chartjs/chartjs-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_smart_table__["b" /* Ng2SmartTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__["a" /* StatusCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_6__solar_solar_component__["a" /* SolarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chartjs_chartjs_line_component__["a" /* ChartjsLineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chartjs_chartjs_pie_component__["a" /* ChartjsPieComponent */]
        ],
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolarComponent = (function () {
    function SolarComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(SolarComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    SolarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
                                        },
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    SolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return SolarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartValue'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SolarComponent.prototype, "chartValue", null);
SolarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-solar',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.scss")],
        template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>Solar Energy Consumption</nb-card-header>\n      <nb-card-body>\n        <div echarts [options]=\"option\" class=\"echart\">\n        </div>\n        <div class=\"info\">\n          <div class=\"value\">6. 421 kWh</div>\n          <div class=\"details\"><span>out of</span> 8.421 kWh</div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], SolarComponent);

var _a;
//# sourceMappingURL=solar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.danger {\n      background-image: linear-gradient(to right, #ff4ca6, #ff4c6a);\n      box-shadow: 0 0 0 0 #db4175, 0 0 0 0 #ff4c88; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n      box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.danger {\n      background-image: linear-gradient(to right, #ff65b2, #ff657f); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #5be1bd, #5be190); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.danger, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.danger {\n      background-image: linear-gradient(to right, #ff38ac, #ff386a);\n      box-shadow: 0 3px 0 0 #db3078, 0 2px 8px 0 #ff388b, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #00d9bf, #00d977);\n      box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.danger {\n      background-image: linear-gradient(to right, #ff54b8, #ff547f); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #24dec8, #24de8a); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.danger, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
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

var StatusCardComponent = (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    return StatusCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "number", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StatusCardComponent.prototype, "on", void 0);
StatusCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-status-card',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.scss")],
        template: "\n    <nb-card (click)=\"on = !on\" [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ number }}</div>\n      </div>\n    </nb-card>\n  ",
    })
], StatusCardComponent);

//# sourceMappingURL=status-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/tasks/tasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(TasksComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TasksComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
                                        },
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    TasksComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return TasksComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartValue'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TasksComponent.prototype, "chartValue", null);
TasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tasks',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/tasks/tasks.component.scss")],
        template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>All Tasks</nb-card-header>\n      <nb-card-body>\n\n      </nb-card-body>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], TasksComponent);

var _a;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <div class=\"team-photo\">\n    <a href=\"mailto:contact@akveo.com\">\n      <button type=\"button\" class=\"btn btn-success btn-icon team-link\">\n        <i class=\"ion-paper-airplane\"></i>\n      </button>\n    </a>\n  </div>\n\n  <div class=\"team-info\">\n    <div class=\"team-title\">\n      <h2>Akveo Team</h2>\n    </div>\n    <div class=\"team-subtitle\">Design & Development</div>\n    <div class=\"team-bio\">\n      We're small team of fullstack software experts. We're crazy about creation of modern and secure software. We help to make\n      your product amazing.\n    </div>\n  </div>\n\n  <div class=\"links\">\n    <a href=\"https://www.akveo.com\" target=\"_blank\">\n      <i class=\"ion-ios-world-outline\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-facebook\"></i>\n    </a>\n    <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\">\n      <i class=\"ion-social-twitter\"></i>\n    </a>\n    <a href=\"https://github.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-github\"></i>\n    </a>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-default) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(235, 239, 245, 0.4), 0 0 12px 0 rgba(76, 166, 255, 0.2); }\n\n:host-context(.nb-theme-default) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-default) .team-info .team-title {\n    color: #2a2a2a;\n    font-family: Exo; }\n    :host-context(.nb-theme-default) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .team-info .team-bio {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-default) .links a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .links a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-cosmic) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(47, 41, 107, 0.4), 0 0 12px 0 rgba(0, 249, 166, 0.2); }\n\n:host-context(.nb-theme-cosmic) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-title {\n    color: #ffffff;\n    font-family: Exo; }\n    :host-context(.nb-theme-cosmic) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .team-info .team-bio {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-cosmic) .links a {\n    text-decoration: none;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .links a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-team',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.html"),
    })
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/database/database.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxs12 col-md-12 col-lg-6\">\n    <nb-card size=\"medium\">\n      <nb-tabset>\n        <nb-tab tabTitle=\"Angular\">\n          <img src=\"../../../assets/images/angular.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"https://angular.io/docs\">Documentation. </a>Angular is a platform that makes it easy to build applications with the web. Angular combines\n            declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development\n            challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop</p>\n          <p>The documentation assumes that you are already familiar with JavaScript, and some of the tools from the latest\n            standards such as classes and modules. The code samples are written using TypeScript. Most Angular code can be\n            written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata.\n          </p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Typescript\">\n          <img src=\"../../../assets/images/typescript.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"https://www.typescriptlang.org/docs/home.html\">Documentation. </a>TypeScript starts from the same syntax and semantics that millions of JavaScript developers\n            know today. Use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript code\n            from JavaScript.</p>\n          <p>TypeScript compiles to clean, simple JavaScript code which runs on any browser, in Node.js, or in any JavaScript\n            engine that supports ECMAScript 6 (or newer).</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Nebular\">\n          <img src=\"../../../assets/images/nebular.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"https://akveo.github.io/nebular/#/docs/getting-started/what-is-nebular\">Documentation. </a>Nebular's primary goal is to assemble together and connect the most awesome features and libraries\n            creating an efficient ecosystem to speed up and simpify the development. carefully crafted the most important\n            components you need to bootstrap your development. Our UI Kit is framework-agnostic, though you could mix it\n            with a CSS-framework of your choice. 2 built-in themes + hundreds of variables to create your own. Multiple themes\n            with hot reload out of the box. </p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Sass\">\n          <img src=\"../../../assets/images/sass.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"http://sass-lang.com/documentation/file.SASS_REFERENCE.html\">Documentation. </a>Sass is completely compatible with all versions of CSS. We take this compatibility seriously,\n            so that you can seamlessly use any available CSS libraries. Sass boasts more features and abilities than any\n            other CSS extension language out there. The Sass Core Team has worked endlessly to not only keep up, but stay\n            ahead. Sass has been actively supported for over 10 years by its loving Core Team. Over and over again, the industry\n            is choosing Sass as the premier CSS extension language. Sass is actively supported and developed by a consortium\n            of several tech companies and hundreds of developers. There are an endless number of frameworks built with Sass.\n            Compass, Bourbon, and Susy just to name a few.</p>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n  <div class=\"col-xxs12 col-md-12 col-lg-6\">\n    <nb-card size=\"medium\">\n      <nb-tabset>\n        <nb-tab tabTitle=\"PostgreSQL\">\n          <img src=\"../../../assets/images/postgresql.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"https://www.postgresql.org/docs/\">Documentation. </a>PostgreSQL is a powerful, open source object-relational database system. It has more than\n            15 years of active development and a proven architecture that has earned it a strong reputation for reliability,\n            data integrity, and correctness. It runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX,\n            macOS, Solaris), and Windows. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers,\n            and stored procedures (in multiple languages). </p>\n\n          <p>It includes most SQL:2008 data types, including INTEGER, NUMERIC, BOOLEAN, CHAR, VARCHAR, DATE, INTERVAL , and\n            TIMESTAMP. It also supports storage of binary large objects, including pictures, sounds, or video. It has native\n            programming interfaces for C/C++, Java, .Net, Perl, Python, Ruby, Tcl, ODBC, among others</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Sequelize\">\n          <img src=\"../../../assets/images/sequelize.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"http://docs.sequelizejs.com/\">Documentation. </a>Sequelize.js is an ORM (Object/Relational Mapper) which provides easy access to MySQL, MariaDB,\n            SQLite or PostgreSQL databases by mapping database entries to objects and vice versa. It has very powerful migrations\n            mechanism that can transform existing database schema into a new version. It also provides database synchronization\n            mechanisms that can create database structure by specifying the model structure.</p>\n          <p>Although Sequelize.js is new library, it have been battle tested. Currently web sites like Shutterstock, Clevertech,\n            Metamarkets and Innofluence have announced that they are using Sequelize.js as ORM of their website.</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Heroku\">\n          <img src=\"../../../assets/images/heroku.png\" />\n          <br>\n          <p>\n            <a target=\"_blank\" href=\"https://devcenter.heroku.com/categories/reference\">Documentation. </a>Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy,\n            manage, and scale modern apps. Our platform is elegant, flexible, and easy to use, offering developers the simplest\n            path to getting their apps to market.</p>\n\n          <p>provides a SQL database-as-a-service that lets you focus on building your application instead of messing around\n            with database management.</p>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-xxs12 col-md-12 col-lg-12\">\n    <nb-card size=\"medium\">\n      <nb-tabset>\n        <nb-tab tabTitle=\"Modules\">\n          <ul>\n            <li>\n              <h4>\n                <i class=\"ion-ios-pie-outline\"></i> Dashboard</h4>\n              <p>This module is designed to help managers to take decisions by showing them the most important information that\n                the web app is generating, data like a chart for the financial status, that include the expenses and the\n                increses, also the current tasks, some contacts to make faster chat and little number of projects that you\n                have create.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-folder-outline\"></i> Projects</h4>\n              <p>This is the main module, to create projects that will have all the information necesarry, to create a new project\n                first you have to make a category, rather be new, in progress, cancelled, complete, etc. So after you create\n                the category you go to All Projects and click on new project enter all the information and click on save,\n                after that the table is going to refresh automatically and you will be able to see, update, and delete.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-compose-outline\"></i> Tasks</h4>\n              <p>After the creation of a project you can start creating new Tasks for that project or any other, in this module\n                you will have to options to see all of your assigned tasks or all the existing tasks, in this case to create\n                a new one, just click on new task and enter the information, click on save and the table is going to refresh\n                automatically and you will be able to see, update, and delete.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-people-outline\"></i> Teams</h4>\n              <p>The team module is important to keep the information of all the employees that work for a project and what\n                tasks they have, so first include a new member to the web app, go to Members and click new Member enter the\n                information of the user and then go to Team Roles to create a new role, this is to give a user the permissions\n                that he can have, for example user can see projects but cant add new team members, after that go to All Teams\n                and click on new team member, choose the member you create and the project that works on, and give that user\n                the role it has.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-calculator-outline\"></i> Finance</h4>\n              <p>In project management it is important to keep the financial status of every entry of the project so in this\n                module it is included an entry category, so first go to Categories and create a new type, and then create\n                a new Entry by going to Finance and create new entry, enter the information with the amount of money and\n                the category of entry, and save it, after that the table is going to refresh automatically and you will be\n                able to see, update, and delete.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-paper-outline\"></i> Notes</h4>\n              <p>It is always important to take notes of important information that can help us or the team in the future so\n                the notes module will have your personal notes, and also the notes of the projects, to the employees to know\n                when a note is created, everything you do is go to All Notes, create new note and enter the information,\n                after that the table is going to refresh automatically and you will be able to see, update, and delete.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-location-outline\"></i> Maps</h4>\n              <p>This module was to look over different locations to know important aspects like where are the project is going\n                to be develop, if there are other locations the company can use, where are the competitions and how can we\n                keep in track of the services the company is going to offer with the creation of the project that and more.\n              </p>\n            </li>\n            <li>\n              <h4>\n                <i class=\"ion-ios-gear-outline\"></i> Settings</h4>\n              <p>This module is only to modify your own personal information, this kind of information is the one your employees\n                are going to see, so the user most have the chance to update the information in case it is necessary\n              </p>\n            </li>\n          </ul>\n        </nb-tab>\n        <nb-tab tabTitle=\"Routes API\">\n          <ul>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h5>Project Routes</h5>\n                <li>/project/list - List all the projects</li>\n                <li>/project/list-tasks - List all the projects and tasks</li>\n                <li>/project/insert - Insert a new project</li>\n                <li>/project/update/:projectId - Update a project with id</li>\n                <li>/project/delete/:projectId - Delete a project with id</li>\n              </div>\n              <div class=\"col-md-6\">\n                <h5>Task Routes</h5>\n                <li>/task/list - List all the tasks</li>\n                <li>/task/insert - Insert a new task</li>\n                <li>/task/update/:taskId - Update a task with id</li>\n                <li>/task/delete/:taskId - Delete a task with id</li>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h5>Team Routes</h5>\n                <li>/team/list - List all the teams</li>\n                <li>/team/insert - Insert a new team</li>\n                <li>/team/update/:teamId - Update a team with id</li>\n                <li>/team/delete/:teamId - Delete a team with id</li>\n              </div>\n              <div class=\"col-md-6\">\n                <h5>Finance Routes</h5>\n                <li>/finance/list - List all the finances</li>\n                <li>/finance/insert - Insert a new finance</li>\n                <li>/finance/update/:financeId - Update a finance with id</li>\n                <li>/finance/delete/:financeId - Delete a finance with id</li>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h5>Note Routes</h5>\n                <li>/note/list - List all the notes</li>\n                <li>/note/insert - Insert a new note</li>\n                <li>/note/update/:noteId - Update a note with id</li>\n                <li>/note/delete/:noteId - Delete a note with id</li>\n              </div>\n            </div>\n          </ul>\n        </nb-tab>\n        <nb-tab tabTitle=\"Compile\">\n            <ol>\n                <h3>Requeriments: </h3>\n                <li>Install Angular CLI</li>\n                <li>Install Dependencies, enter to client and in cmd enter the command:\n                  <strong>npm install</strong>\n                </li>\n              </ol>\n          <ol>\n            <h3>Steps: </h3>\n            <li>Start the Restfull API, enter to api and in cmd enter the command:\n              <strong>npm run start:dev</strong> it will run in the port 8000\n            </li>\n            <li>Start the Angular Client, enter to client and in cmd enter the command:\n              <strong>npm start</strong> it will run in the port 4200\n            </li>\n            <li>Enter in a browser to localhost:4200/</li>\n          </ol>\n        </nb-tab>\n        <nb-tab tabTitle=\"Update\">\n          <ul>\n              <li>\n                  <h4>\n                    <i class=\"ion-ios-calendar-outline\"></i> Calendar</h4>\n                  <p>On next updates the module calendar will be add, to create important events and have\n                    a schedule about all the activities and task that are in the web app.\n                  </p>\n                </li>\n                <li>\n                    <h4>\n                      <i class=\"ion-ios-time-outline\"></i> Timer</h4>\n                    <p>On next updates the module timer will be add, to create timers of the different tasks\n                      and know the time that it takes to work on a task.\n                    </p>\n                  </li>\n          </ul>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/database/database.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .progress {\n  height: 25px; }\n\n:host-context(.nb-theme-default) img {\n  width: 100px;\n  height: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n:host-context(.nb-theme-default) .btn-more-tasks {\n  float: right; }\n\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a4abb3;\n  padding: 1rem; }\n  :host-context(.nb-theme-default) .contact:not(:last-child) {\n    border-bottom: 1px solid #ebeef2; }\n\n:host-context(.nb-theme-default) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-name {\n  font-family: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  font-size: 1.25rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  padding: 1.25rem; }\n\n:host-context(.nb-theme-default) /deep/ ngx-tab1, :host-context(.nb-theme-default) /deep/ ngx-tab2 {\n  display: block;\n  padding: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .progress {\n    height: 25px; }\n  :host-context(.nb-theme-cosmic) img {\n    width: 100px;\n    height: 100px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  :host-context(.nb-theme-cosmic) .btn-more-tasks {\n    float: right; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n    display: block;\n    height: 456px;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n      display: block;\n      height: 100%;\n      width: 100%; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n  :host-context(.nb-theme-cosmic) nb-tabset {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n    padding: 0; }\n  :host-context(.nb-theme-cosmic) .contact {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a1a1e5;\n    padding: 1rem; }\n    :host-context(.nb-theme-cosmic) .contact:not(:last-child) {\n      border-bottom: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .i-contact {\n    font-size: 2rem;\n    cursor: pointer; }\n  :host-context(.nb-theme-cosmic) .time {\n    font-size: 0.875rem;\n    font-weight: 300;\n    text-transform: uppercase; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .info-container {\n    margin-left: 0.875rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    font-size: 1.25rem;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-title {\n    font-size: 0.875rem;\n    font-weight: 300;\n    text-transform: uppercase; }\n  :host-context(.nb-theme-cosmic) nb-tabset {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tab {\n    padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) /deep/ ngx-tab1, :host-context(.nb-theme-cosmic) /deep/ ngx-tab2 {\n    display: block;\n    padding: 1.25rem; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n      font-size: 1rem;\n      padding: 0 0.25rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/database/database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseComponent; });
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

var DatabaseComponent = (function () {
    function DatabaseComponent() {
    }
    return DatabaseComponent;
}());
DatabaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-database',
        styles: [__webpack_require__("../../../../../src/app/pages/database/database.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/database/database.component.html"),
    }),
    __metadata("design:paramtypes", [])
], DatabaseComponent);

//# sourceMappingURL=database.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/database/database.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_component__ = __webpack_require__("../../../../../src/app/pages/database/database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DatabaseModule = (function () {
    function DatabaseModule() {
    }
    return DatabaseModule;
}());
DatabaseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["b" /* Ng2SmartTableModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__database_component__["a" /* DatabaseComponent */]
        ],
    })
], DatabaseModule);

//# sourceMappingURL=database.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'ion-ios-pie-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Projects',
        icon: 'ion-ios-folder-outline',
        children: [
            {
                title: 'All Projects',
                link: '/pages/projects/smart-table',
            },
            {
                title: 'Categories',
                link: '/pages/projects/categories',
            },
        ]
    },
    {
        title: 'Tasks',
        icon: 'ion-ios-compose-outline',
        children: [
            {
                title: 'My Assigned Tasks',
                link: '/pages/tasks/my-tasks',
            },
            {
                title: 'All Project Tasks',
                link: '/pages/tasks/all-tasks',
            },
        ]
    },
    /*{
      title: 'Files',
      icon: 'ion-ios-copy-outline',
      children: [
        {
          title: 'My Project Files',
          link: '/pages/files/my-files',
        },
        {
          title: 'All Project Files',
          link: '/pages/files/all-files',
        },
      ]
    },*/
    {
        title: 'Team',
        icon: 'ion-ios-people-outline',
        children: [
            {
                title: 'Members',
                link: '/pages/teams/members',
            },
            {
                title: 'All Teams',
                link: '/pages/teams/teammembers',
            },
            {
                title: 'Team Roles',
                link: '/pages/teams/teamroles',
            },
        ]
    },
    /*{
      title: 'Timer',
      icon: 'ion-ios-timer-outline',
      children: [
        {
          title: 'My Timers',
          link: '/pages/forms/inputs',
        },
        {
          title: 'All Timers',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Status',
          link: '/pages/forms/inputs',
        },
      ]
    },*/
    //{
    //  title: 'Chat',
    //  icon: 'ion-ios-chatboxes-outline',
    //  link: '/pages/finances/my-finances',
    //},
    {
        title: 'Finance',
        icon: 'ion-ios-calculator-outline',
        children: [
            {
                title: 'My Finance',
                link: '/pages/finances/my-finances',
            },
            {
                title: 'All Finance',
                link: '/pages/finances/all-finances',
            },
            {
                title: 'Categories',
                link: '/pages/finances/categories',
            }
        ]
    },
    {
        title: 'Notes',
        icon: 'ion-ios-paper-outline',
        children: [
            {
                title: 'My Notes',
                link: '/pages/notes/my-notes',
            },
            {
                title: 'All Notes',
                link: '/pages/notes/all-notes',
            }
        ]
    },
    {
        title: 'Maps',
        icon: 'ion-ios-location-outline',
        link: '/pages/maps/gmaps',
    },
    {
        title: 'Settings',
        icon: 'ion-ios-gear-outline',
        link: '/pages/settings',
    },
];
//# sourceMappingURL=pages-menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_database_component__ = __webpack_require__("../../../../../src/app/pages/database/database.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'projects',
                loadChildren: './projects/projects.module#ProjectsModule',
            }, {
                path: 'tasks',
                loadChildren: './tasks/tasks.module#TasksModule',
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule',
            }, {
                path: 'files',
                loadChildren: './files/files.module#FilesModule',
            }, {
                path: 'teams',
                loadChildren: './teams/teams.module#TeamsModule',
            }, {
                path: 'finances',
                loadChildren: './finances/finances.module#FinancesModule',
            }, {
                path: 'notes',
                loadChildren: './notes/notes.module#NotesModule',
            }, {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */],
            }, {
                path: 'database',
                component: __WEBPACK_IMPORTED_MODULE_5__database_database_component__["a" /* DatabaseComponent */],
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    return PagesComponent;
}());
PagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-pages',
        template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
    })
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_module__ = __webpack_require__("../../../../../src/app/pages/projects/projects.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_module__ = __webpack_require__("../../../../../src/app/pages/tasks/tasks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_module__ = __webpack_require__("../../../../../src/app/pages/calendar/calendar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__files_files_module__ = __webpack_require__("../../../../../src/app/pages/files/files.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teams_teams_module__ = __webpack_require__("../../../../../src/app/pages/teams/teams.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_module__ = __webpack_require__("../../../../../src/app/pages/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__database_database_module__ = __webpack_require__("../../../../../src/app/pages/database/database.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__pages_routing_module__["a" /* PagesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_3__projects_projects_module__["ProjectsModule"],
            __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_module__["TasksModule"],
            __WEBPACK_IMPORTED_MODULE_7__calendar_calendar_module__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_8__files_files_module__["FilesModule"],
            __WEBPACK_IMPORTED_MODULE_9__teams_teams_module__["TeamsModule"],
            __WEBPACK_IMPORTED_MODULE_10__settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_11__database_database_module__["a" /* DatabaseModule */]
        ],
        declarations: PAGES_COMPONENTS.slice(),
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xxs12 col-md-12 col-lg-12\">\n        <nb-card class=\"solar-card\">\n            <nb-card-header>\n                <i class=\"ion-ios-gear\"> Settings</i>\n            </nb-card-header>\n            <nb-card-body>\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"inputFirstName\" class=\"col-sm-3 col-form-label\">First Name</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"first_name\" [(ngModel)]=\"user.first_name\" type=\"name\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"Enter your first name\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputLastName\" class=\"col-sm-3 col-form-label\">Last Name</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"last_name\" [(ngModel)]=\"user.last_name\" type=\"email\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Enter your last name\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputUsername\" class=\"col-sm-3 col-form-label\">Username</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"username\" [(ngModel)]=\"user.username\" type=\"first_name\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Enter your username\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputEmail\" class=\"col-sm-3 col-form-label\">Email</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"email\" [(ngModel)]=\"user.email\" type=\"last_name\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter your email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"password\" [(ngModel)]=\"user.password\" type=\"textarea\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Enter your password\"/>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputRole\" class=\"col-sm-3 col-form-label\">Role</label>\n                        <div class=\"col-sm-9\">\n                            <input name=\"role\" [(ngModel)]=\"user.role\" type=\"text\" class=\"form-control\" id=\"address1\" placeholder=\"Enter your role\">\n                        </div>\n                    </div><hr>\n                    <button type=\"button\" class=\"btn btn-warning btn-update\" (click)=\"updateUser()\">Update</button>\n                </form>\n            </nb-card-body>\n        </nb-card>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .progress {\n  height: 25px; }\n\n:host-context(.nb-theme-default) .btn-update {\n  float: right; }\n\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .progress {\n    height: 25px; }\n  :host-context(.nb-theme-cosmic) .btn-update {\n    float: right; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n    display: block;\n    height: 456px;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n    :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n      display: block;\n      height: 100%;\n      width: 100%; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(_userService) {
        this._userService = _userService;
        this.user = this._userService.getIdentity();
        this.id = this._userService.getIdentity().id;
    }
    SettingsComponent.prototype.updateUser = function () {
        var _this = this;
        this._userService.update(this.user, this.id).subscribe(function (response) {
            localStorage.setItem('identity', JSON.stringify(_this.user));
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'success',
                title: 'User has been updated',
                showConfirmButton: false,
            });
        }, function (error) { });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-settings',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/settings/settings.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/settings/settings.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__settings_component__["a" /* SettingsComponent */]
        ],
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map