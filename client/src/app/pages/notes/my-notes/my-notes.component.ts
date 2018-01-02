import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/note';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import swal from 'sweetalert2';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngbd-modal-content',
  providers: [NoteService, ProjectService],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">Note Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
          <div class="form-group row">
            <label for="inputTitle" class="col-sm-3 col-form-label">Title</label>
            <div class="col-sm-9">
              <input name="title" [(ngModel)]="note_show.name" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter the name of the note">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputNotes" class="col-sm-3 col-form-label">Note</label>
            <div class="col-sm-9">
              <!--<ngx-tiny-mce></ngx-tiny-mce>-->
              <textarea name="note" [(ngModel)]="note_show.note" type="text" class="form-control" id="inputFinanceCategory" placeholder="Enter the note" rows="5"></textarea>
            </div>
          </div>
          <div class="form-group row">
          <label for="inputProgress" class="col-sm-3 col-form-label">Project</label>
          <div class="col-sm-9">
              <select value="note_show.project" (change)="changeProject(project)" #selectTipo="ngModel" name="project" [(ngModel)]="note_show.project" class="form-control">
                  <option *ngFor="let project of projects" value="{{project.name}}">{{project.name}}</option>
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
export class NgbdModalContent2 {

  @Input() note_show;
  @Input() id;

  public projects: Array<Project>;

  constructor(
    public activeModal: NgbActiveModal,
    private _projectService: ProjectService,
    private _noteService: NoteService,
  ) {
    this.getProjectData();
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

  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.note_show.project = project.name;
    });
  }

  updateNote() {
    this._noteService.update(this.note_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Note has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }
}



@Component({
  selector: 'image-view',
  styleUrls: ['./my-notes.component.scss'],
  template: `
  <img class="img-circle" src="../../../../assets/images/jose.png"/>
  `,
})
export class ImageViewComponent2 implements ViewCell, OnInit {
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
  templateUrl: './my-notes.component.html',
  providers: [NoteService, ProjectService],
  styleUrls: ['./my-notes.component.scss'],

})

export class MyNotesComponent {
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

        valuePrepareFunction: (cell, row) => {
          var d = new Date(row.updatedAt),
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
  public notes: Array<Note>; // Arreglo de asociados
  public note_register: Note;
  public projects: Array<Project>;

  constructor(
    private service: SmartTableService,
    private _noteService: NoteService,
    private themeService: NbThemeService,
    private _projectService: ProjectService,
    private modalService: NgbModal) {

    this.note_register = new Note('', '', '');
    this.notes = new Array<Note>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });

    this.getProjectData();
    this.getData();
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

  open(event) {
    var id = event.data.id;
    var note_show = new Note(event.data.name, event.data.note, event.data.project);
    const modalRef = this.modalService.open(NgbdModalContent2, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.note_show = note_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }

  getData() {
    this._noteService.list().subscribe(
      response => {
        if (!response.notes) { } else {
          this.source.load(response.notes);
          let notes = response.notes;
          this.notes = notes;
        }
      },
      error => { }
    );
  }

  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.note_register.project = project.name;
    });
  }

  insert() {
    this._noteService.insert(this.note_register).subscribe(
      response => {
        let note = response.note;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Note has been saved',
          showConfirmButton: false,
        })
        if (!note) { } else {
          this.note_register = note;
          this.note_register = new Note('', '', '');
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

  deleteProject(event): void {
    swal({
      title: 'Delete the note?',
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
          'Your note has been deleted.',
          'success'
        )
        this._noteService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }
        );
      }
    })
  }


}
