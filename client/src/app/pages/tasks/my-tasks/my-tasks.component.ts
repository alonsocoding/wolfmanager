import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/Task';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './my-tasks.component.html',
  providers: [TaskService],
  styleUrls: ['./my-tasks.component.scss'],

})

export class MyTasksComponent {
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
      name: {
        title: 'Task Name',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      project_name: {
        title: 'Project Name',
        type: 'string',
      },
      progres: {
        title: 'Progress',
        type: 'string',
      },
      due_date: {
        title: 'Due Date',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          var d = new Date(row.due_date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            time = d.getHours() + ':' + d.getMinutes();

          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;

          return [day, month, year].join('-') + " " + time;
        }
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public tasks: Array<Task>; // Arreglo de asociados
  public task_register: Task;

  constructor(
    private service: SmartTableService,
    private _taskService: TaskService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.task_register = new Task('', '', '', '', '', '');
    this.tasks = new Array<Task>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._taskService.list().subscribe(
      response => {
        if (!response.tasks) { } else {
          this.source.load(response.tasks);
          let tasks = response.tasks;
          this.tasks = tasks;
        }
      },
      error => { }
    );
  }

  insert() {
    this._taskService.insert(this.task_register).subscribe(
      response => {
        let task = response.task;
        this.source = new LocalDataSource();
        this.getData();
        if (!task) { } else {
          this.task_register = task;
          this.task_register = new Task('', '', '', '', '', '');
        }
      },
      error => { }
    );
    console.log(this.task_register);
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


/*
P5KWJ3HW4ubdMfGFH4DzR6nB3FBDnUTXhTZ88fVKJ7kqT81HTKNd

*/