import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntryService } from '../../../services/entry.service';
import { Entry } from '../../../models/entry';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';
import { FinanceCategoryService } from '../../../services/financecategory.service';
import { FinanceCategory } from '../../../models/FinanceCategory';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import swal from 'sweetalert2';



import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngbd-modal-content',
  providers: [EntryService, ProjectService, FinanceCategoryService],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">Entry Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
          <div class="form-group row">
            <label for="inputTitle" class="col-sm-3 col-form-label">Title</label>
            <div class="col-sm-9">
              <input name="title" [(ngModel)]="entry_show.title" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter the name of the entry">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputNotes" class="col-sm-3 col-form-label">Notes</label>
            <div class="col-sm-9">
              <!--<ngx-tiny-mce></ngx-tiny-mce>-->
              <textarea name="note" [(ngModel)]="entry_show.note" type="text" class="form-control" id="inputFinanceCategory" placeholder="Enter the note of the entry" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputProgress" class="col-sm-3 col-form-label">Category</label>
            <div class="col-sm-9">
                <select (change)="changeCategory(category)" #selectTipo="ngModel" name="category" [(ngModel)]="entry_show.category" class="form-control">
                    <option *ngFor="let category of categories" value="{{category.name}}">{{category.name}}</option>
                </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputProgress" class="col-sm-3 col-form-label">Project</label>
            <div class="col-sm-9">
                <select (change)="changeProject(project)" #selectTipo="ngModel" name="project" [(ngModel)]="entry_show.project_name" class="form-control">
                    <option *ngFor="let project of projects" value="{{project.name}}">{{project.name}}</option>
                </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputTitle" class="col-sm-3 col-form-label">Amount</label>
            <div class="col-sm-9">
              <input name="amount" [(ngModel)]="entry_show.amount" type="name" class="form-control" id="inputFinanceCategory" placeholder="0.00">
            </div>
          </div>

        </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateEntry()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent2 {

  @Input() entry_show;
  @Input() id;
  public projects: Array<Project>;
  public categories: Array<FinanceCategory>;
  constructor(
    public activeModal: NgbActiveModal,
    private _entryService: EntryService,
    private _projectService: ProjectService,
    private _financeCategoryService: FinanceCategoryService,
  ) {
    this.getProjectData();
    this.getCategoryData();
  }

  getProjectData() {
    this._projectService.list().subscribe(
      response => {
        if (!response.projects) { } else {
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }
    );
  }
  getCategoryData() {
    this._financeCategoryService.list().subscribe(
      response => {
        if (!response.financecategories) { } else {
          let financecategories = response.financecategories;
          this.categories = financecategories;
        }
      },
      error => { }
    );
  }
  changeCategory(category_name) {
    this.categories.forEach(category => {
      if (category.name == category_name)
        this.entry_show.category = category.name;
    });
  }
  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.entry_show.project_name = project.name;
    });
  }

  updateEntry() {
    this._entryService.update(this.entry_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Finance Entry has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }
  
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './all-finances.component.html',
  providers: [EntryService, ProjectService, FinanceCategoryService],
  styleUrls: ['./all-finances.component.scss'],

})

export class AllFinancesComponent {
  themeName = 'default';
  themeSubscription: any;

  settings = {
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
      title: {
        title: 'Title',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'string',
      },
      project_name: {
        title: 'Project',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<span class="badge badge-success">${row.category}</span>`;
        }
      },
      createdAt: {
        title: 'Time',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          var d = new Date(row.createdAt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            time = d.getHours() + ':' + d.getMinutes();

          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;

          return [day, month, year].join('-');
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public entries: Array<Entry>; // Arreglo de asociados
  public entry_register: Entry;
  public projects: Array<Project>;
  public categories: Array<FinanceCategory>;


  constructor(
    private service: SmartTableService,
    private _entryService: EntryService,
    private themeService: NbThemeService,
    private _projectService: ProjectService,
    private _financeCategoryService: FinanceCategoryService,

    private modalService: NgbModal) {

    this.entry_register = new Entry('', '', '', '', '');
    this.entries = new Array<Entry>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
    this.getProjectData();
    this.getCategoryData();

  }
  open(event) {
    var id = event.data.id;
    var entry_show = new Entry(event.data.title,event.data.note,event.data.category,
    event.data.project_name, event.data.amount);
    const modalRef = this.modalService.open(NgbdModalContent2, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.entry_show = entry_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }


  getProjectData() {
    this._projectService.list().subscribe(
      response => {
        if (!response.projects) { } else {
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }
    );
  }
  getCategoryData() {
    this._financeCategoryService.list().subscribe(
      response => {
        if (!response.financecategories) { } else {
          let financecategories = response.financecategories;
          this.categories = financecategories;
        }
      },
      error => { }
    );
  }
  changeCategory(category_name) {
    this.categories.forEach(category => {
      if (category.name == category_name)
        this.entry_register.category = category.name;
    });
  }
  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.entry_register.project_name = project.name;
    });
  }


  getData() {
    this._entryService.list().subscribe(
      response => {
        if (!response.entries) { } else {
          this.source.load(response.entries);
          let entries = response.entries;
          this.entries = entries;
        }
      },
      error => { }
    );
  }

  insert() {
    this._entryService.insert(this.entry_register).subscribe(
      response => {
        let entry = response.entry;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Finance Entry has been saved',
          showConfirmButton: false,
        })
        if (!entry) { } else {
          this.entry_register = entry;
          this.entry_register = new Entry('', '', '', '', '');
        }
      },
      error => { }
    );
    console.log(this.entry_register);
  }

  init(colors: any) {
    this.btn_settings = [{
      class: 'btn-hero-info',
      container: 'info-container',
      title: 'Info Button',
      buttonTitle: 'Info',
      default: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
        bevel: `shade(${colors.info}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.info}, -5deg)`,
      },
    }];
  }

  editProject(): void {
    console.log("edit");
  }

  deleteProject(event): void {
    swal({
      title: 'Delete the finance entry?',
      text: "You won't be able to revert this",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#4ca6ff',
      cancelButtonColor: '#ff4c6a',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.value) {
        swal(
          'Deleted',
          'Your finance entry has been deleted.',
          'success'
        )
        this._entryService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }
        );
      }
    })
  }
}
