import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FinanceCategoryService } from '../../../services/financecategory.service';
import { FinanceCategory } from '../../../models/financeCategory';
import swal from 'sweetalert2';

import { SmartTableService } from '../../../@core/data/smart-table.service';


import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngbd-modal-content',
  providers: [FinanceCategoryService],
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
    <label for="inputFinanceCategory" class="col-sm-3 col-form-label">Finance Category Name</label>
    <div class="col-sm-9">
      <input name="name" [(ngModel)]="financecategory_show.name" type="name" class="form-control" id="inputFinanceCategory" placeholder="Enter the name of the category">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputDescription" class="col-sm-3 col-form-label">Description</label>
    <div class="col-sm-9">
      <input name="description" [(ngModel)]="financecategory_show.description" type="name" class="form-control" id="inputDescription" placeholder="Enter the description of the category">
    </div>
  </div>

        </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateCategory()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  @Input() financecategory_show;
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private _financeCategoryService: FinanceCategoryService,
  ) {
  }

  updateCategory() {
    this._financeCategoryService.update(this.financecategory_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Finance Category has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }
  
}


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

  open(event) {
    var id = event.data.id;
    var financecategory_show = new FinanceCategory(event.data.name,event.data.description);
    const modalRef = this.modalService.open(NgbdModalContent, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.financecategory_show = financecategory_show;

    modalRef.result.then((result) => {
      this.getData();
    });
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
        swal({
          type: 'success',
          title: 'Finance Category has been saved',
          showConfirmButton: false,
        })
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

  deleteProject(event): void {
    swal({
      title: 'Delete the finance category?',
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
          'Your finance category has been deleted.',
          'success'
        )
        this._financeCategoryService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }
        );
      }
    })
  }
}
