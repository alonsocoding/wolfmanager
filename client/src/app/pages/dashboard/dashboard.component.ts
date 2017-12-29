import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-dashboard',
  providers: [ProjectService],
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {


  settings = {
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
        valuePrepareFunction: (cell, row) => {
          return `<img src="../../../../assets/images/default-project.png" width="31" height="29"/>`;
        }
      },
      name: {
        title: 'Project Name',
        type: 'string',
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

  public projects: Array<Project>; // Arreglo de asociados
  themeName = 'default';
  themeSubscription: any;
  btn_settings: Array<any>;

  contacts: any[];
  recent: any[];

  private users = {
    jose: { name: 'Jose Delgado', picture: 'assets/images/jose.png'},
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  constructor(
    private _projectService: ProjectService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.projects = new Array<Project>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
    this.contacts = [
          {user: this.users.jose, type: 'mobile'},
          {user: this.users.eva, type: 'home'},
          {user: this.users.jack, type: 'mobile'},
          {user: this.users.lee, type: 'mobile'},
          {user: this.users.alan, type: 'home'},
        ];
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
