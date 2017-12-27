import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntryService } from '../../../services/entry.service';
import { Entry } from '../../../models/entry';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './all-finances.component.html',
  providers: [EntryService],
  styleUrls: ['./all-finances.component.scss'],

})

export class AllFinancesComponent {
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
      title: {
        title: 'Title',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'string',
      },
      project_name: {
        title: 'Project',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      user: {
        title: 'User',
        type: 'string',
      },
      createAt: {
        title: 'Time',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public entries: Array<Entry>; // Arreglo de asociados
  public entry_register: Entry;

  constructor(
    private service: SmartTableService,
    private _entryService: EntryService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.entry_register = new Entry('', '', '', '', '');
    this.entries = new Array<Entry>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._entryService.list().subscribe(
      response => {
        if (!response.entries) { } else {
          this.source.load(response.entries);
          let entries = response.entries;
          this.entries = entries;
        }
      },
      error => { }
    );
  }

  insert() {
    this._entryService.insert(this.entry_register).subscribe(
      response => {
        let entry = response.entry;
        this.source = new LocalDataSource();
        this.getData();
        if (!entry) { } else {
          this.entry_register = entry;
          this.entry_register = new Entry('', '', '', '', '');
        }
      },
      error => { }
    );
    console.log(this.entry_register);
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
