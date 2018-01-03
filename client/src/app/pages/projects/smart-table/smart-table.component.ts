import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';

import { ProjectCategoryService } from '../../../services/projectcategory.service';
import { ProjectCategory } from '../../../models/ProjectCategory';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

import { TeamMemberService } from '../../../services/teammember.service';
import { TeamMember } from '../../../models/TeamMember';

import { SmartTableService } from '../../../@core/data/smart-table.service';

import swal from 'sweetalert2';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  selector: 'ngbd-modal-content',
  providers: [ProjectService, ProjectCategoryService],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">Project Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
    <div class="form-group row">
      <label for="inputName" class="col-sm-3 col-form-label">Project Name</label>
      <div class="col-sm-9">
        <input name="name" [(ngModel)]="project_show.name" type="name" class="form-control" id="inputName" placeholder="Enter the name of the project">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputIcon" class="col-sm-3 col-form-label">Project Icon</label>
      <div class="col-sm-9">
        <div class="input-group">
          <input type="file" class="form-control" placeholder="Select a file">
        </div>
      </div>
    </div>
    <div class="form-group row">
    <label for="inputDescription" class="col-sm-3 col-form-label">Description</label>
    <div class="col-sm-9">
        <textarea rows="5" name="description" [(ngModel)]="project_show.description" type="progress" class="form-control" id="inputProgress" placeholder="Enter the description of the project"></textarea>
      <!--<ngx-tiny-mce></ngx-tiny-mce>-->
    </div>
    </div>
    <div class="form-group row">
    <label for="inputProgress" class="col-sm-3 col-form-label">Progress</label>
    <div class="col-sm-9">
      <input name="progress" [(ngModel)]="project_show.progress" type="progress" class="form-control" id="inputProgress" placeholder="Enter progress with % at the end">
    </div>
    </div>
    <div class="form-group row">
                  <label for="inputProgress" class="col-sm-3 col-form-label">Category</label>
                  <div class="col-sm-9">
                      <select value="project_show.category" (change)="changeCategory(category)" #selectTipo="ngModel" name="category" [(ngModel)]="project_show.category" class="form-control">
                          <option *ngFor="let category of categories" value="{{category.name}}">{{category.name}}</option>
                      </select>
                </div>
                </div>
  </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateNote()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  @Input() project_show;
  @Input() id;

  public categories: Array<Project>;

  constructor(public activeModal: NgbActiveModal,
    private _projectCategoryService: ProjectCategoryService,
    private _projectService: ProjectService) {
      this.getProjectCategoryData();
  }

  getProjectCategoryData() {
    this._projectCategoryService.list().subscribe(
      response => {
        if (!response.projectcategories) { } else {
          let categories = response.projectcategories;
          this.categories = categories;
        }
      },
      error => { }
    );
  }

  changeCategory(category_name) {
    this.categories.forEach(category => {
      if (category.name == category_name)
        this.project_show.category = category.name;
    });
  }

  updateNote() {
    this._projectService.update(this.project_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Project has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }
}


@Component({
  selector: 'image-view',
  styleUrls: ['./smart-table.component.scss'],
  template: `
  <img class="img-circle" src="../../../../assets/images/jose.png"/>
  `,
})
export class ImageViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}



@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  providers: [ProjectService, ProjectCategoryService, UserService, TeamMemberService],
  styleUrls: ['./smart-table.component.scss'],
})

export class SmartTableComponent {
  themeName = 'default';
  themeSubscription: any;
  img = "../../../../assets/images/wolf.png"

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
      icon: {
        title: 'Icon',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<img src="../../../../assets/images/default-project.png" width="31" height="29"/>`;
        }
      },
      name: {
        title: 'Project Name',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<span class="badge badge-success">${row.category}</span>`;
        }
      },
      team: {
        title: 'Team',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          var team = new Array;
          for(var i=0; i<this.teammembers.length; i++) {
            if(this.teammembers[i].project_name == row.name)
            team.push(`<span class="badge badge-info">${this.teammembers[i].username}</span>`);  
          }
          return team;
        }
      },
      progres: {
        title: 'Progress',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<div class="progress-bar" role="progressbar" width="30" aria-valuenow="32" aria-valuemin="0" aria-valuemax="32">${row.progress}</div>`
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public projects: Array<Project>; // Arreglo de asociados
  public categories: Array<ProjectCategory>;
  public project_register: Project;
  public user: any;
  public users: Array<User>; 
  public teammembers: Array<TeamMember>; 

  constructor(
    private _projectCategoryService: ProjectCategoryService,
    private _userService: UserService,
    private _teammemberService: TeamMemberService,
    private service: SmartTableService,
    private _projectService: ProjectService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.project_register = new Project('', '', '', '', '');
    this.projects = new Array<Project>();
    this.users = new Array<User>();
    this.teammembers = new Array<TeamMember>();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });

    this.getCategoyData();
    this.getData();
    this.getDataUsers();
    this.getDataTeamMember();

  }

  getDataTeamMember() {
    this._teammemberService.list().subscribe(
      response => {
        if (!response.teammembers) { } else {
          let teammembers = response.teammembers;
          this.teammembers = teammembers;
        }
      },
      error => { }
    );
  }

  getDataUsers() {
    this._userService.list().subscribe(
      response => {
        if (!response.users) { } else {
          let users = response.users;
          this.users = users;
        }
      },
      error => { }
    );
  }

  open(event) {
    var id = event.data.id;
    var project_show = new Project(event.data.name, event.data.icon, event.data.description, event.data.progress, event.data.category);
    const modalRef = this.modalService.open(NgbdModalContent, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.project_show = project_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }



  getCategoyData() {
    this._projectCategoryService.list().subscribe(
      response => {
        if (!response.projectcategories) { } else {
          let categories = response.projectcategories;
          this.categories = categories;
        }
      },
      error => { }
    );
  }

  getData() {
    this._projectService.list().subscribe(
      response => {
        if (!response.projects) { } else {
          this.source.load(response.projects);
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }
    );
  }

  insert() {
    this._projectService.insert(this.project_register).subscribe(
      response => {
        let project = response.project;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Project has been saved',
          showConfirmButton: false,
        })
        if (!project) { } else {
          this.project_register = project;
          this.project_register = new Project('', '', '', '', '');
        }
      },
      error => { }
    );
  }

  changeCategory(category_name) {
    this.categories.forEach(category => {
      if (category.name == category_name)
        this.project_register.category = category.name;
    });
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
      title: 'Delete the project?',
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
          'Your project has been deleted.',
          'success'
        )
        this._projectService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }
        );
      }
    })
  }
}
