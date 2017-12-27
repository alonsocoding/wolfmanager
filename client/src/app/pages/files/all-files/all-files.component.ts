import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../services/file.service';
import { File } from '../../../models/File';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './all-files.component.html',
  providers: [FileService],
  styleUrls: ['./all-files.component.scss'],

})

export class AllFilesComponent {
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
        title: 'File Name',
        type: 'number',
      },
      size: {
        title: 'Size',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      project: {
        title: 'Project',
        type: 'string',
      },
      user: {
        title: 'User',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public files: Array<File>; // Arreglo de asociados
  public file_register: File;

  constructor(
    private service: SmartTableService,
    private _fileService: FileService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.file_register = new File('', '', '', '', '', '');
    this.files = new Array<File>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._fileService.list().subscribe(
      response => {
        if (!response.files) { } else {
          this.source.load(response.files);
          let files = response.files;
          this.files = files;
        }
      },
      error => { }
    );
  }

  insert() {
    this._fileService.insert(this.file_register).subscribe(
      response => {
        let file = response.file;
        this.source = new LocalDataSource();
        this.getData();
        if (!file) { } else {
          this.file_register = file;
          this.file_register = new File('', '', '', '', '', '');
        }
      },
      error => { }
    );
    console.log(this.file_register);
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
