import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamMemberService } from '../../../services/teammember.service';
import { TeamMember } from '../../../models/TeamMember';

import { SmartTableService } from '../../../@core/data/smart-table.service';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './teammembers.component.html',
  providers: [TeamMemberService],
  styleUrls: ['./teammembers.component.scss'],

})

export class TeamMembersComponent {
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
      username: {
        title: 'Username',
        type: 'number',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
      project_name: {
        title: 'Project Name',
        type: 'string',
      },
      last_online: {
        title: 'Last Online',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public teammembers: Array<TeamMember>; // Arreglo de asociados
  public teammember_register: TeamMember;

  constructor(
    private service: SmartTableService,
    private _teammemberService: TeamMemberService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.teammember_register = new TeamMember('', '', '');
    this.teammembers = new Array<TeamMember>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._teammemberService.list().subscribe(
      response => {
        if (!response.teammembers) { } else {
          this.source.load(response.teammembers);
          let teammembers = response.teammembers;
          this.teammembers = teammembers;
        }
      },
      error => { }
    );
  }

  insert() {
    this._teammemberService.insert(this.teammember_register).subscribe(
      response => {
        let teammember = response.teammember;
        this.source = new LocalDataSource();
        this.getData();
        if (!teammember) { } else {
          this.teammember_register = teammember;
          this.teammember_register = new TeamMember('', '', '');
        }
      },
      error => { }
    );
    console.log(this.teammember_register);
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
