import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/note';

import { SmartTableService } from '../../../@core/data/smart-table.service';
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
        if (!note) { } else {
          this.note_register = note;
          this.note_register = new Note('', '', '');
        }
      },
      error => { }
    );
    console.log(this.note_register);
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
