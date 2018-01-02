import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCategoryService } from '../../../services/projectcategory.service';
import { ProjectCategory } from '../../../models/ProjectCategory';

import { SmartTableService } from '../../../@core/data/smart-table.service';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import swal from 'sweetalert2';



@Component({
  selector: 'ngbd-modal-content',
  providers: [ProjectCategoryService],
  styleUrls: ['./categories.component.scss'],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">Project Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
          <div class="form-group row">
            <label for="inputName" class="col-sm-3 col-form-label">Category Name</label>
            <div class="col-sm-9">
              <input name="name" [(ngModel)]="projectcategory_show.name" type="name" class="form-control" id="inputName" placeholder="Enter the name of the category">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputProgress" class="col-sm-3 col-form-label">Color</label>
            <div class="col-sm-9">
              <input type="color" class="form-control" id="exampleInputColor1" name="color" [(ngModel)]="projectcategory_show.color" >
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

  @Input() projectcategory_show;
  @Input() id;


  constructor(public activeModal: NgbActiveModal,
    private _projectCategoryService: ProjectCategoryService) {
  }
  updateNote() {
    this._projectCategoryService.update(this.projectcategory_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Project Category has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }
}

@Component({
  selector: 'button-view',
  styleUrls: ['./categories.component.scss'],
  template: `
  <input class="form-control" type="color" value="{{renderValue}}"  disabled>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
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
  templateUrl: './categories.component.html',
  providers: [ProjectCategoryService],
  styleUrls: ['./categories.component.scss'],

})

export class CategoryComponent {
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
        title: 'Project Category Name',
        type: 'string',
      },
      color: {
        title: 'Project Category Color',
        type: 'custom',
        renderComponent: ButtonViewComponent
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public projectcategories: Array<ProjectCategory>; // Arreglo de asociados
  public projectcategory_register: ProjectCategory;

  constructor(
    private service: SmartTableService,
    private _projectCategoryService: ProjectCategoryService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.projectcategory_register = new ProjectCategory('',''); 
    this.projectcategories = new Array<ProjectCategory>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }

  open(event) {
    var id = event.data.id;
    var projectcategory_show = new ProjectCategory(event.data.name,event.data.color);
    const modalRef = this.modalService.open(NgbdModalContent2, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.projectcategory_show = projectcategory_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }


  getData() {
    this._projectCategoryService.list().subscribe(
      response => {
        if(!response.projectcategories){ }else{
          this.source.load(response.projectcategories);
          let projectcategories = response.projectcategories;
          this.projectcategories = projectcategories;
        }
      },
      error => { }	
    );
  }

  insert(){
    this._projectCategoryService.insert(this.projectcategory_register).subscribe(
      response => {
        let projectcategory = response.projectcategory;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Project has been saved',
          showConfirmButton: false,
        })
        if(!projectcategory) { } else {
          this.projectcategory_register = projectcategory;
          this.projectcategory_register = new ProjectCategory('','');
        }
      },
      error => { }
    );
    console.log(this.projectcategory_register);
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
      title: 'Delete the project category?',
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
          'Your project category has been deleted.',
          'success'
        )
        this._projectCategoryService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }	
        );
      }
    })
  }

}
