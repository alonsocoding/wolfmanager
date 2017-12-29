import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/note';

import { SmartTableService } from '../../../@core/data/smart-table.service';

import swal from 'sweetalert2';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'image-view',
  styleUrls: ['./all-notes.component.scss'],
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
  templateUrl: './all-notes.component.html',
  providers: [NoteService],
  styleUrls: ['./all-notes.component.scss'],

})

export class AllNotesComponent {
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

  constructor(
    private service: SmartTableService,
    private _noteService: NoteService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.note_register = new Note('', '', '');
    this.notes = new Array<Note>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
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
