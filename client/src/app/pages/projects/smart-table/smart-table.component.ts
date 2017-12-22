import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  providers: [ProjectService],
  styleUrls: ['./smart-table.component.scss'],

})

export class SmartTableComponent {
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
      icon: {
        title: 'Icon',
        type: 'number',
      },
      name: {
        title: 'Project Name',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      team: {
        title: 'Team',
        type: 'string',
      },
      progres: {
        title: 'Progress',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.progress }
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public projects: Array<Project>; // Arreglo de asociados
  public project_register: Project;

  constructor(
    private service: SmartTableService,
    private _projectService: ProjectService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.project_register = new Project('','','','',''); 
    this.projects = new Array<Project>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._projectService.list().subscribe(
      response => {
        if(!response.projects){ }else{
          this.source.load(response.projects);
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }	
    );
  }

  insert(){
    this._projectService.insert(this.project_register).subscribe(
      response => {
        let project = response.project;
        this.source = new LocalDataSource();
        this.getData();
        if(!project) { } else {
          this.project_register = project;
          this.project_register = new Project('','','','','');
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
