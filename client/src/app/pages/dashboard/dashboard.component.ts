import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { EntryService } from '../../services/entry.service';
import { Router } from '@angular/router';

import { Project } from '../../models/Project';
import { Task } from '../../models/Task';
import { User } from '../../models/User';
import { Entry } from '../../models/Entry';

import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-dashboard',
  providers: [ProjectService, TaskService, UserService, EntryService],
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
          return `
        <div class="progress-bar" role="progressbar" width="30" aria-valuenow="32" aria-valuemin="0" aria-valuemax="32">${row.progress}</div>`
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  public projects: Array<Project>; 
  public tasks: Array<Task>; 
  public users: Array<User>;
  public entries: Array<Entry>;

  themeName = 'default';
  themeSubscription: any;
  btn_settings: Array<any>;

  public countProject = 0;
  public countTask = 0;
  public countMember = 0;
  public countEntry = 0;
public router: Router;
  public value;

  contacts: any[];
  recent: any[];

  private userss = {
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
    private _taskService: TaskService,
    private _userService: UserService,
    private _memberService: UserService,
    private _entryService: EntryService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {
    this.value = new Array;
    this.value.push(100);

    this.projects = new Array<Project>();
    this.tasks = new Array<Task>();
    this.users = new Array<User>();
    this.entries = new Array<Entry>();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });

    this.countAllProject();
    this.countAllTask();
    this.countAllMember();
    this.countAllEntry();

    this.getData();
    this.getTaskData();
    this.getUserData();
    this.getEntryData();

    this.contacts = [
          {user: this.userss.jose, type: 'mobile'},
          {user: this.userss.eva, type: 'home'},
          {user: this.userss.jack, type: 'mobile'},
          {user: this.userss.lee, type: 'mobile'},
        ];
  }

  sendProject() {
    this.router.navigate(['#/pages/projects/smart-table']);
  }

  getEntryData() {
    this._entryService.list().subscribe(
      response => {
        if (!response.entries) { } else {
          let entries = response.entries;
          this.entries = entries;
        }
      },
      error => { }
    );
  }

  getUserData() {
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

  getTaskData() {
    this._taskService.list().subscribe(
      response => {
        if (!response.tasks) { } else {
          let tasks = response.tasks;
          this.tasks = tasks;
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
          for(var i=0; i<projects.size; i++) {
            this.value.push(projects[i].progress);
          }
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

  countAllProject() {
    this._projectService.count().subscribe(
      response => {
        if (!response.count) { console.log("asd") } else {
          console.log(response.count);
          let result = response.count;
          this.countProject = result;
        }
      },
      error => { }
    );
  }
  countAllTask() {
    this._taskService.count().subscribe(
      response => {
        if (!response.count) { console.log("asd") } else {
          let result = response.count;
          this.countTask= result;
        }
      },
      error => { }
    );
  }
  countAllMember() {
    this._memberService.count().subscribe(
      response => {
        if (!response.count) { console.log("asd") } else {
          let result = response.count;
          this.countMember = result;
        }
      },
      error => { }
    );
  }
  countAllEntry() {
    this._entryService.count().subscribe(
      response => {
        if (!response.count) { console.log("asd") } else {
          let result = response.count;
          this.countEntry = result;
        }
      },
      error => { }
    );
  }

  editProject(): void {
    console.log("edit");
  }

  deleteProject(): void {
    console.log("delete");
  }



}
