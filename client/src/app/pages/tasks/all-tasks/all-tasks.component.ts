import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/Task';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';
import swal from 'sweetalert2';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">Task Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-3 col-form-label">Task Name</label>
                  <div class="col-sm-9">
                    <input name="name" [(ngModel)]="task_show.name" type="name" class="form-control" id="inputName" placeholder="Enter the name of the task">
                  </div>
                </div>
                <div class="form-group row">
                <label for="inputDescription" class="col-sm-3 col-form-label">Task Description</label>
                <div class="col-sm-9">
                  <!--<ngx-tiny-mce></ngx-tiny-mce>-->
                  <textarea rows="5" name="overview" [(ngModel)]="task_show.overview" type="name" class="form-control" id="inputDescription" placeholder="Enter the description of the task"></textarea>
                </div>
                </div>
                <div class="form-group row">
                <label for="inputStartDate" class="col-sm-3 col-form-label">Start Date</label>
                <div class="col-sm-9">
                  <input name="start_date" [(ngModel)]="task_show.start_date" type="date" class="form-control" id="inputProgress" placeholder="Enter the start date of the task">
                </div>
                </div>
                <div class="form-group row">
                    <label for="inputDueDate" class="col-sm-3 col-form-label">Due Date</label>
                    <div class="col-sm-9">
                      <input name="due_date" [(ngModel)]="task_show.due_date" type="date" class="form-control" id="inputProgress" placeholder="Enter due date of the task">
                    </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputStatus" class="col-sm-3 col-form-label">Status</label>
                        <div class="col-sm-9">
                        <select class="form-control" name="status" [(ngModel)]="task_show.status">
                          <option>New</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                          <option>On Hold</option>
                          <option>Cancelled</option>
                        </select>
                      </div>
                      </div>
              </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="activeModal.close('Close click')">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  @Input() task_show;
  @Input() id;

  constructor(public activeModal: NgbActiveModal) {
  }
}



@Component({
  selector: 'ngx-smart-table',
  templateUrl: './all-tasks.component.html',
  providers: [TaskService, ProjectService],
  styleUrls: ['./all-tasks.component.scss'],

})

export class AllTasksComponent {
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
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<span class="badge badge-success">${row.status}</span>`;
        }
      },
      project_name: {
        title: 'Project Name',
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

          return [day, month, year].join('-');
        }
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public tasks: Array<Task>; // Arreglo de asociados
  public task_register: Task;
  public projects: Array<Project>;

  constructor(
    private service: SmartTableService,
    private _taskService: TaskService,
    private _projectService: ProjectService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.projects = new Array<Project>();
    this.task_register = new Task('', '', '', '', '', '');
    this.tasks = new Array<Task>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });

    this.getProjectData();
    this.getData();

  }

  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.task_register.project_name = project.name;
    });
  } 

  getProjectData() {
    this._projectService.list().subscribe(
      response => {
        if(!response.projects){ }else{
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }	
    );
  }

  open(event) {
    var id = event.data.id;
    var task_show = new Task(event.data.name,event.data.overview,event.data.project_name,event.data.start_date,event.data.due_date,event.data.status);
    const modalRef = this.modalService.open(NgbdModalContent, {
      size: 'lg',
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.task_show = task_show;
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
        swal({
          type: 'success',
          title: 'Task has been saved',
          showConfirmButton: false,
        })
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

  deleteProject(event): void {
    swal({
      title: 'Delete the task?',
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
          'Your task has been deleted.',
          'success'
        )
        this._taskService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }	
        );
      }
    })
  }
}
