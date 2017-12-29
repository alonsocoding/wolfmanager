import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCategoryService } from '../../../services/projectcategory.service';
import { ProjectCategory } from '../../../models/ProjectCategory';

import { SmartTableService } from '../../../@core/data/smart-table.service';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import swal from 'sweetalert2';

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
      editButtonContent: '<i class="nb-edit" (click)="editProject()"></i>',
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
