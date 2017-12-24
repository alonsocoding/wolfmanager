import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectCategoryService } from '../../../services/projectcategory.service';
import { ProjectCategory } from '../../../models/ProjectCategory';

import { SmartTableService } from '../../../@core/data/smart-table.service';
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
        type: 'string',
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

  deleteProject(): void {
    console.log("delete");
  }
}