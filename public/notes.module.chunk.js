webpackJsonp(["notes.module"],{

/***/ "../../../../../src/app/models/note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = (function () {
    function Note(name, note, project) {
        this.name = name;
        this.note = note;
        this.project = project;
    }
    return Note;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ "../../../../../src/app/pages/notes/all-notes/all-notes.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    <i class=\"ion-ios-compose-outline\"></i> Notes\n    <button class=\"btn btn-hero-success btn-add\" data-toggle=\"modal\" data-target=\"#exampleModal\">New Note</button>\n  </nb-card-header>\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"open($event)\" (delete)=\"deleteProject($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Note</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group row\">\n            <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Title</label>\n            <div class=\"col-sm-9\">\n              <input name=\"title\" [(ngModel)]=\"note_register.name\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the name of the note\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputNotes\" class=\"col-sm-3 col-form-label\">Note</label>\n            <div class=\"col-sm-9\">\n              <!--<ngx-tiny-mce></ngx-tiny-mce>-->\n              <textarea name=\"note\" [(ngModel)]=\"note_register.note\" type=\"text\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the note\" rows=\"5\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputProgress\" class=\"col-sm-3 col-form-label\">Project</label>\n            <div class=\"col-sm-9\">\n                <select (change)=\"changeProject(project)\" #selectTipo=\"ngModel\" name=\"project\" [(ngModel)]=\"project\" class=\"form-control\">\n                    <option *ngFor=\"let project of projects\" value=\"{{project.name}}\">{{project.name}}</option>\n                </select>\n            </div>\n          </div>\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"insert()\" data-dismiss=\"modal\">Save Note</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/notes/all-notes/all-notes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-add {\n  float: right; }\n\n:host-context(.nb-theme-default) img {\n  width: 31px;\n  height: 29px;\n  border-radius: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-add {\n  float: right; }\n\n:host-context(.nb-theme-cosmic) img {\n  width: 31px;\n  height: 29px;\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/notes/all-notes/all-notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImageViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllNotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_note__ = __webpack_require__("../../../../../src/app/models/note.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal, _projectService, _noteService) {
        this.activeModal = activeModal;
        this._projectService = _projectService;
        this._noteService = _noteService;
        this.getProjectData();
    }
    NgbdModalContent.prototype.getProjectData = function () {
        var _this = this;
        this._projectService.list().subscribe(function (response) {
            if (!response.projects) { }
            else {
                var projects = response.projects;
                _this.projects = projects;
            }
        }, function (error) { });
    };
    NgbdModalContent.prototype.changeProject = function (project_name) {
        var _this = this;
        this.projects.forEach(function (project) {
            if (project.name == project_name)
                _this.note_show.project = project.name;
        });
    };
    NgbdModalContent.prototype.updateNote = function () {
        this._noteService.update(this.note_show, this.id).subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
                type: 'success',
                title: 'Note has been updated',
                showConfirmButton: false,
            });
        }, function (error) { });
    };
    return NgbdModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "note_show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "id", void 0);
NgbdModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]],
        template: "\n    <div class=\"modal-header modal-lg\">\n      <h4 class=\"modal-title\">Note Information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      \n    <form>\n          <div class=\"form-group row\">\n            <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Title</label>\n            <div class=\"col-sm-9\">\n              <input name=\"title\" [(ngModel)]=\"note_show.name\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the name of the note\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputNotes\" class=\"col-sm-3 col-form-label\">Note</label>\n            <div class=\"col-sm-9\">\n              <!--<ngx-tiny-mce></ngx-tiny-mce>-->\n              <textarea name=\"note\" [(ngModel)]=\"note_show.note\" type=\"text\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the note\" rows=\"5\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n          <label for=\"inputProgress\" class=\"col-sm-3 col-form-label\">Project</label>\n          <div class=\"col-sm-9\">\n              <select value=\"note_show.project\" (change)=\"changeProject(project)\" #selectTipo=\"ngModel\" name=\"project\" [(ngModel)]=\"note_show.project\" class=\"form-control\">\n                  <option *ngFor=\"let project of projects\" value=\"{{project.name}}\">{{project.name}}</option>\n              </select>\n          </div>\n        </div>\n\n        </form><hr>\n\n    </div>\n    <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateNote()\">Update</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */]) === "function" && _c || Object])
], NgbdModalContent);

var ImageViewComponent = (function () {
    function ImageViewComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ImageViewComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ImageViewComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    return ImageViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImageViewComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImageViewComponent.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ImageViewComponent.prototype, "save", void 0);
ImageViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'image-view',
        styles: [__webpack_require__("../../../../../src/app/pages/notes/all-notes/all-notes.component.scss")],
        template: "\n  <img class=\"img-circle\" src=\"../../../../assets/images/jose.png\"/>\n  ",
    })
], ImageViewComponent);

var AllNotesComponent = (function () {
    function AllNotesComponent(service, _noteService, themeService, _projectService, modalService) {
        var _this = this;
        this.service = service;
        this._noteService = _noteService;
        this.themeService = themeService;
        this._projectService = _projectService;
        this.modalService = modalService;
        this.themeName = 'default';
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
                add: false,
            },
            edit: {
                editButtonContent: '<i class="nb-search" (click)="editProject()"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                user: {
                    title: 'User',
                    type: 'custom',
                    renderComponent: ImageViewComponent
                },
                name: {
                    title: 'Title',
                    type: 'string',
                },
                note: {
                    title: 'Note',
                    type: 'string',
                },
                project: {
                    title: 'Project',
                    type: 'string',
                },
                updatedAt: {
                    title: 'Last Updated',
                    type: 'string',
                    valuePrepareFunction: function (cell, row) {
                        var d = new Date(row.updatedAt), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(), time = d.getHours() + ':' + d.getMinutes();
                        if (month.length < 2)
                            month = '0' + month;
                        if (day.length < 2)
                            day = '0' + day;
                        return [day, month, year].join('-');
                    }
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.note_register = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */]('', '', '');
        this.notes = new Array();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
        this.getProjectData();
        this.getData();
    }
    AllNotesComponent.prototype.getProjectData = function () {
        var _this = this;
        this._projectService.list().subscribe(function (response) {
            if (!response.projects) { }
            else {
                var projects = response.projects;
                _this.projects = projects;
            }
        }, function (error) { });
    };
    AllNotesComponent.prototype.open = function (event) {
        var _this = this;
        var id = event.data.id;
        var note_show = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */](event.data.name, event.data.note, event.data.project);
        var modalRef = this.modalService.open(NgbdModalContent, {
            size: 'lg',
        });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.note_show = note_show;
        modalRef.result.then(function (result) {
            _this.getData();
        });
    };
    AllNotesComponent.prototype.getData = function () {
        var _this = this;
        this._noteService.list().subscribe(function (response) {
            if (!response.notes) { }
            else {
                _this.source.load(response.notes);
                var notes = response.notes;
                _this.notes = notes;
            }
        }, function (error) { });
    };
    AllNotesComponent.prototype.changeProject = function (project_name) {
        var _this = this;
        this.projects.forEach(function (project) {
            if (project.name == project_name)
                _this.note_register.project = project.name;
        });
    };
    AllNotesComponent.prototype.insert = function () {
        var _this = this;
        this._noteService.insert(this.note_register).subscribe(function (response) {
            var note = response.note;
            _this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
            _this.getData();
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
                type: 'success',
                title: 'Note has been saved',
                showConfirmButton: false,
            });
            if (!note) { }
            else {
                _this.note_register = note;
                _this.note_register = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */]('', '', '');
            }
        }, function (error) { });
    };
    AllNotesComponent.prototype.init = function (colors) {
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
    AllNotesComponent.prototype.editProject = function () {
        console.log("edit");
    };
    AllNotesComponent.prototype.deleteProject = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Delete the note?',
            text: "You won't be able to revert this",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#4ca6ff',
            cancelButtonColor: '#ff4c6a',
            confirmButtonText: 'Yes, delete it'
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Deleted', 'Your note has been deleted.', 'success');
                _this._noteService.delete(event.data.id).subscribe(function (response) {
                    _this.getData();
                }, function (error) { });
            }
        });
    };
    return AllNotesComponent;
}());
AllNotesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-smart-table',
        template: __webpack_require__("../../../../../src/app/pages/notes/all-notes/all-notes.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/notes/all-notes/all-notes.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["o" /* NbThemeService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _j || Object])
], AllNotesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=all-notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/notes/my-notes/my-notes.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>\n      <i class=\"ion-ios-compose-outline\"></i> Notes\n      <button class=\"btn btn-hero-success btn-add\" data-toggle=\"modal\" data-target=\"#exampleModal\">New Note</button>\n    </nb-card-header>\n    <nb-card-body>\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"open($event)\" (delete)=\"deleteProject($event)\">\n      </ng2-smart-table>\n    </nb-card-body>\n  </nb-card>\n  \n  \n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Note</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group row\">\n              <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Title</label>\n              <div class=\"col-sm-9\">\n                <input name=\"title\" [(ngModel)]=\"note_register.name\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the name of the note\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"inputNotes\" class=\"col-sm-3 col-form-label\">Note</label>\n              <div class=\"col-sm-9\">\n                <!--<ngx-tiny-mce></ngx-tiny-mce>-->\n                <textarea name=\"note\" [(ngModel)]=\"note_register.note\" type=\"text\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the note\" rows=\"5\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"inputProgress\" class=\"col-sm-3 col-form-label\">Project</label>\n              <div class=\"col-sm-9\">\n                  <select (change)=\"changeProject(project)\" #selectTipo=\"ngModel\" name=\"project\" [(ngModel)]=\"project\" class=\"form-control\">\n                      <option *ngFor=\"let project of projects\" value=\"{{project.name}}\">{{project.name}}</option>\n                  </select>\n              </div>\n            </div>\n  \n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"insert()\" data-dismiss=\"modal\">Save Note</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/pages/notes/my-notes/my-notes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .btn-add {\n  float: right; }\n\n:host-context(.nb-theme-default) img {\n  width: 31px;\n  height: 29px;\n  border-radius: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-add {\n  float: right; }\n\n:host-context(.nb-theme-cosmic) img {\n  width: 31px;\n  height: 29px;\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/notes/my-notes/my-notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgbdModalContent2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewComponent2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyNotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_note_service__ = __webpack_require__("../../../../../src/app/services/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_note__ = __webpack_require__("../../../../../src/app/models/note.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NgbdModalContent2 = (function () {
    function NgbdModalContent2(activeModal, _projectService, _noteService) {
        this.activeModal = activeModal;
        this._projectService = _projectService;
        this._noteService = _noteService;
        this.getProjectData();
    }
    NgbdModalContent2.prototype.getProjectData = function () {
        var _this = this;
        this._projectService.list().subscribe(function (response) {
            if (!response.projects) { }
            else {
                var projects = response.projects;
                _this.projects = projects;
            }
        }, function (error) { });
    };
    NgbdModalContent2.prototype.changeProject = function (project_name) {
        var _this = this;
        this.projects.forEach(function (project) {
            if (project.name == project_name)
                _this.note_show.project = project.name;
        });
    };
    NgbdModalContent2.prototype.updateNote = function () {
        this._noteService.update(this.note_show, this.id).subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
                type: 'success',
                title: 'Note has been updated',
                showConfirmButton: false,
            });
        }, function (error) { });
    };
    return NgbdModalContent2;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent2.prototype, "note_show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent2.prototype, "id", void 0);
NgbdModalContent2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]],
        template: "\n    <div class=\"modal-header modal-lg\">\n      <h4 class=\"modal-title\">Note Information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      \n    <form>\n          <div class=\"form-group row\">\n            <label for=\"inputTitle\" class=\"col-sm-3 col-form-label\">Title</label>\n            <div class=\"col-sm-9\">\n              <input name=\"title\" [(ngModel)]=\"note_show.name\" type=\"name\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the name of the note\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputNotes\" class=\"col-sm-3 col-form-label\">Note</label>\n            <div class=\"col-sm-9\">\n              <!--<ngx-tiny-mce></ngx-tiny-mce>-->\n              <textarea name=\"note\" [(ngModel)]=\"note_show.note\" type=\"text\" class=\"form-control\" id=\"inputFinanceCategory\" placeholder=\"Enter the note\" rows=\"5\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n          <label for=\"inputProgress\" class=\"col-sm-3 col-form-label\">Project</label>\n          <div class=\"col-sm-9\">\n              <select value=\"note_show.project\" (change)=\"changeProject(project)\" #selectTipo=\"ngModel\" name=\"project\" [(ngModel)]=\"note_show.project\" class=\"form-control\">\n                  <option *ngFor=\"let project of projects\" value=\"{{project.name}}\">{{project.name}}</option>\n              </select>\n          </div>\n        </div>\n\n        </form><hr>\n\n    </div>\n    <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateNote()\">Update</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */]) === "function" && _c || Object])
], NgbdModalContent2);

var ImageViewComponent2 = (function () {
    function ImageViewComponent2() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ImageViewComponent2.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ImageViewComponent2.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    return ImageViewComponent2;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImageViewComponent2.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImageViewComponent2.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ImageViewComponent2.prototype, "save", void 0);
ImageViewComponent2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'image-view',
        styles: [__webpack_require__("../../../../../src/app/pages/notes/my-notes/my-notes.component.scss")],
        template: "\n  <img class=\"img-circle\" src=\"../../../../assets/images/jose.png\"/>\n  ",
    })
], ImageViewComponent2);

var MyNotesComponent = (function () {
    function MyNotesComponent(service, _noteService, themeService, _projectService, modalService) {
        var _this = this;
        this.service = service;
        this._noteService = _noteService;
        this.themeService = themeService;
        this._projectService = _projectService;
        this.modalService = modalService;
        this.themeName = 'default';
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
                add: false,
            },
            edit: {
                editButtonContent: '<i class="nb-search" (click)="editProject()"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                user: {
                    title: 'User',
                    type: 'custom',
                    renderComponent: ImageViewComponent2
                },
                name: {
                    title: 'Title',
                    type: 'string',
                },
                note: {
                    title: 'Note',
                    type: 'string',
                },
                project: {
                    title: 'Project',
                    type: 'string',
                },
                updatedAt: {
                    title: 'Last Updated',
                    type: 'string',
                    valuePrepareFunction: function (cell, row) {
                        var d = new Date(row.updatedAt), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(), time = d.getHours() + ':' + d.getMinutes();
                        if (month.length < 2)
                            month = '0' + month;
                        if (day.length < 2)
                            day = '0' + day;
                        return [day, month, year].join('-');
                    }
                }
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.note_register = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */]('', '', '');
        this.notes = new Array();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
        this.getProjectData();
        this.getData();
    }
    MyNotesComponent.prototype.getProjectData = function () {
        var _this = this;
        this._projectService.list().subscribe(function (response) {
            if (!response.projects) { }
            else {
                var projects = response.projects;
                _this.projects = projects;
            }
        }, function (error) { });
    };
    MyNotesComponent.prototype.open = function (event) {
        var _this = this;
        var id = event.data.id;
        var note_show = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */](event.data.name, event.data.note, event.data.project);
        var modalRef = this.modalService.open(NgbdModalContent2, {
            size: 'lg',
        });
        modalRef.componentInstance.id = id;
        modalRef.componentInstance.note_show = note_show;
        modalRef.result.then(function (result) {
            _this.getData();
        });
    };
    MyNotesComponent.prototype.getData = function () {
        var _this = this;
        this._noteService.list().subscribe(function (response) {
            if (!response.notes) { }
            else {
                _this.source.load(response.notes);
                var notes = response.notes;
                _this.notes = notes;
            }
        }, function (error) { });
    };
    MyNotesComponent.prototype.changeProject = function (project_name) {
        var _this = this;
        this.projects.forEach(function (project) {
            if (project.name == project_name)
                _this.note_register.project = project.name;
        });
    };
    MyNotesComponent.prototype.insert = function () {
        var _this = this;
        this._noteService.insert(this.note_register).subscribe(function (response) {
            var note = response.note;
            _this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
            _this.getData();
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
                type: 'success',
                title: 'Note has been saved',
                showConfirmButton: false,
            });
            if (!note) { }
            else {
                _this.note_register = note;
                _this.note_register = new __WEBPACK_IMPORTED_MODULE_5__models_note__["a" /* Note */]('', '', '');
            }
        }, function (error) { });
    };
    MyNotesComponent.prototype.init = function (colors) {
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
    MyNotesComponent.prototype.editProject = function () {
        console.log("edit");
    };
    MyNotesComponent.prototype.deleteProject = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Delete the note?',
            text: "You won't be able to revert this",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#4ca6ff',
            cancelButtonColor: '#ff4c6a',
            confirmButtonText: 'Yes, delete it'
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Deleted', 'Your note has been deleted.', 'success');
                _this._noteService.delete(event.data.id).subscribe(function (response) {
                    _this.getData();
                }, function (error) { });
            }
        });
    };
    return MyNotesComponent;
}());
MyNotesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-smart-table',
        template: __webpack_require__("../../../../../src/app/pages/notes/my-notes/my-notes.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */], __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]],
        styles: [__webpack_require__("../../../../../src/app/pages/notes/my-notes/my-notes.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_note_service__["a" /* NoteService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["o" /* NbThemeService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _j || Object])
], MyNotesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=my-notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/notes/notes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_component__ = __webpack_require__("../../../../../src/app/pages/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_notes_all_notes_component__ = __webpack_require__("../../../../../src/app/pages/notes/all-notes/all-notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_notes_my_notes_component__ = __webpack_require__("../../../../../src/app/pages/notes/my-notes/my-notes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notes_component__["a" /* NotesComponent */],
        children: [{
                path: 'my-notes',
                component: __WEBPACK_IMPORTED_MODULE_4__my_notes_my_notes_component__["b" /* MyNotesComponent */],
            }, {
                path: 'all-notes',
                component: __WEBPACK_IMPORTED_MODULE_3__all_notes_all_notes_component__["a" /* AllNotesComponent */],
            }],
    }];
var NotesRoutingModule = (function () {
    function NotesRoutingModule() {
    }
    return NotesRoutingModule;
}());
NotesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], NotesRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__notes_component__["a" /* NotesComponent */],
    __WEBPACK_IMPORTED_MODULE_3__all_notes_all_notes_component__["a" /* AllNotesComponent */],
    __WEBPACK_IMPORTED_MODULE_4__my_notes_my_notes_component__["b" /* MyNotesComponent */]
];
//# sourceMappingURL=notes-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotesComponent = (function () {
    function NotesComponent() {
    }
    return NotesComponent;
}());
NotesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tables',
        template: "<router-outlet></router-outlet>",
    })
], NotesComponent);

//# sourceMappingURL=notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/notes/notes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_routing_module__ = __webpack_require__("../../../../../src/app/pages/notes/notes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_notes_all_notes_component__ = __webpack_require__("../../../../../src/app/pages/notes/all-notes/all-notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_notes_my_notes_component__ = __webpack_require__("../../../../../src/app/pages/notes/my-notes/my-notes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var components = [];
var NotesModule = (function () {
    function NotesModule() {
    }
    return NotesModule;
}());
NotesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__notes_routing_module__["a" /* NotesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* ToasterModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__notes_routing_module__["b" /* routedComponents */].concat(components, [
            __WEBPACK_IMPORTED_MODULE_7__all_notes_all_notes_component__["b" /* ImageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__all_notes_all_notes_component__["c" /* NgbdModalContent */],
            __WEBPACK_IMPORTED_MODULE_8__my_notes_my_notes_component__["a" /* ImageViewComponent2 */],
            __WEBPACK_IMPORTED_MODULE_8__my_notes_my_notes_component__["c" /* NgbdModalContent2 */]
        ]),
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__all_notes_all_notes_component__["b" /* ImageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__all_notes_all_notes_component__["c" /* NgbdModalContent */],
            __WEBPACK_IMPORTED_MODULE_8__my_notes_my_notes_component__["a" /* ImageViewComponent2 */],
            __WEBPACK_IMPORTED_MODULE_8__my_notes_my_notes_component__["c" /* NgbdModalContent2 */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
        ],
    })
], NotesModule);

//# sourceMappingURL=notes.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteService = (function () {
    // La URL http://localhost:8000/api
    function NoteService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    // Insert a new Note
    NoteService.prototype.insert = function (note_register) {
        var params = JSON.stringify(note_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'note/insert', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // List all the Note
    NoteService.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'note/list', options)
            .map(function (res) { return res.json(); });
    };
    // Delete a single Note
    NoteService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'note/delete/' + id, options)
            .map(function (res) { return res.json(); });
    };
    // Update a single Note
    NoteService.prototype.update = function (note_to_update, id) {
        var params = JSON.stringify(note_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'note/update/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return NoteService;
}());
NoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NoteService);

var _a;
//# sourceMappingURL=note.service.js.map

/***/ }),

/***/ "../../../../angular2-toaster/angular2-toaster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* unused harmony reexport ToasterService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* unused harmony reexport ToasterConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* unused harmony reexport BodyOutputType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__("../../../../angular2-toaster/src/toaster.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/bodyOutputType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toastComp]',
                template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig?.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig?.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'clickEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");




var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref) {
        this.ref = ref;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === "function") {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log("The toast click handler is not a callable function.");
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId)
            return;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === "undefined") {
            if (typeof this.toasterconfig.showCloseButton === "object") {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === "boolean") {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === "number")
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === "object")
            timeout = timeout[toast.type];
        if (timeout > 0) {
            toast.timeoutId = window.setTimeout(function () {
                _this.ref.markForCheck();
                _this.removeToast(toast);
            }, timeout);
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0)
            return;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback)
            toast.onHideCallback(toast);
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());

ToasterContainerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'toaster-container',
                template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\" \n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\" \n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\" \n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                // TODO: use styleUrls once Angular 2 supports the use of relative paths
                // https://github.com/angular/angular/issues/2383
                //styleUrls: ['./toaster.css']
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('toastState', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('flyRight, flyLeft, slideDown, slideUp, fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translate(0,0)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyRight', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyRight => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => flyLeft', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('flyLeft => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.25s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideDown', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideDown => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => slideUp', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(200%)'
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('slideUp => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s ease-in')
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('fade => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('0.3s 10ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                                opacity: 0,
                            }))
                        ])
                    ]),
                ]
            },] },
];
/** @nocollapse */
ToasterContainerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToasterContainerComponent.propDecorators = {
    'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");





var ToasterModule = (function () {
    function ToasterModule() {
    }
    return ToasterModule;
}());

ToasterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                ]
            },] },
];
/** @nocollapse */
ToasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error("No Toaster Containers have been initialized to receive toasts.");
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());

ToasterService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToasterService.ctorParameters = function () { return []; };
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ })

});
//# sourceMappingURL=notes.module.chunk.js.map