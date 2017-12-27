import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamRoleService } from '../../../services/teamrole.service';
import { TeamRole } from '../../../models/TeamRole';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './teamroles.component.html',
  providers: [TeamRoleService],
  styleUrls: ['./teamroles.component.scss'],

})

export class TeamRolesComponent {
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
        title: 'Role Name',
        type: 'number',
      },
      permissions: {
        title: 'Permissions',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public teamroles: Array<TeamRole>; // Arreglo de asociados
  public teamrole_register: TeamRole;

  constructor(
    private service: SmartTableService,
    private _teamroleService: TeamRoleService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.teamrole_register = new TeamRole('', false, false, false, false, false, false, false, false, false, false, false);
    this.teamroles = new Array<TeamRole>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._teamroleService.list().subscribe(
      response => {
        if (!response.teamroles) { } else {
          this.source.load(response.teamroles);
          let teamroles = response.teamroles;
          this.teamroles = teamroles;
        }
      },
      error => { }
    );
  }

  insert() {
    this._teamroleService.insert(this.teamrole_register).subscribe(
      response => {
        let teamrole = response.teamrole;
        this.source = new LocalDataSource();
        this.getData();
        if (!teamrole) { } else {
          this.teamrole_register = teamrole;
          this.teamrole_register = new TeamRole('', false, false, false, false, false, false, false, false, false, false, false);
        }
      },
      error => { }
    );
    console.log(this.teamrole_register);
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
