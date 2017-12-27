import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinanceCategoryService } from '../../../services/financecategory.service';
import { FinanceCategory } from '../../../models/financeCategory';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './categories.component.html',
  providers: [FinanceCategoryService],
  styleUrls: ['./categories.component.scss'],

})

export class CategoriesComponent {
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
        title: 'Category Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public financecategories: Array<FinanceCategory>; // Arreglo de asociados
  public financecategory_register: FinanceCategory;

  constructor(
    private service: SmartTableService,
    private _financeCategoryService: FinanceCategoryService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.financecategory_register = new FinanceCategory('', '');
    this.financecategories = new Array<FinanceCategory>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._financeCategoryService.list().subscribe(
      response => {
        if (!response.financecategories) { } else {
          this.source.load(response.financecategories);
          let financecategories = response.financecategories;
          this.financecategories = financecategories;
        }
      },
      error => { }
    );
  }

  insert() {
    this._financeCategoryService.insert(this.financecategory_register).subscribe(
      response => {
        let financecategory = response.financecategory;
        this.source = new LocalDataSource();
        this.getData();
        if (!financecategory) { } else {
          this.financecategory_register = financecategory;
          this.financecategory_register = new FinanceCategory('', '');
        }
      },
      error => { }
    );
    console.log(this.financecategory_register);
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
