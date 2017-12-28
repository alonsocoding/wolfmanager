import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';

import { UserService } from '../../../@core/data/users.service';

import { SmartTableService } from '../../../@core/data/smart-table.service';


import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

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
  providers: [ProjectService],
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
          return `<span class="badge badge-primary">${row.category}</span>`;
        }
      },
      team: {
        title: 'Team',
        type: 'custom',
        renderComponent: ImageViewComponent
      },
      progres: {
        title: 'Progress',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<div class="progress">
        <div class="progress-bar" role="progressbar" width="30" aria-valuenow="32" aria-valuemin="0" aria-valuemax="32">${row.progress}</div></div>`
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public projects: Array<Project>; // Arreglo de asociados
  public project_register: Project;
  public user: any;

  constructor(
    private userService: UserService,
    private service: SmartTableService,
    private _projectService: ProjectService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.project_register = new Project('', '', '', '', '');
    this.projects = new Array<Project>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();

    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.jose);
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
        if (!project) { } else {
          this.project_register = project;
          this.project_register = new Project('', '', '', '', '');
        }
      },
      error => { }
    );
    console.log(this.project_register);
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

  deleteProject(): void {
    console.log("delete");
  }
}
