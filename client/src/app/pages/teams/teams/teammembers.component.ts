import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TeamMemberService } from '../../../services/teammember.service';
import { TeamMember } from '../../../models/TeamMember';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/Project';
import { TeamRoleService } from '../../../services/teamrole.service';
import { TeamRole } from '../../../models/TeamRole';

import swal from 'sweetalert2';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngbd-modal-content',
  providers: [TeamMemberService, UserService, ProjectService, TeamRoleService],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">User Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
    <div class="form-group row">
    <label for="inputUsername" class="col-sm-3 col-form-label">Username</label>
    <div class="col-sm-9">
      <select (change)="changeUsername(user)" #selectTipo="ngModel" name="user" [(ngModel)]="teammember_show.username" class="form-control">
        <option *ngFor="let user of users" value="{{user.username}}">{{user.username}}</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputProject" class="col-sm-3 col-form-label">Project Name</label>
    <div class="col-sm-9">
      <select (change)="changeProject(project)" #selectTipo="ngModel" name="project" [(ngModel)]="teammember_show.project_name" class="form-control">
        <option *ngFor="let project of projects" value="{{project.name}}">{{project.name}}</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputRole" class="col-sm-3 col-form-label">Role</label>
    <div class="col-sm-9">
      <select (change)="changeRole(role)" #selectTipo="ngModel" name="role" [(ngModel)]="teammember_show.role" class="form-control">
        <option *ngFor="let role of teamroles" value="{{role.name}}">{{role.name}}</option>
      </select>
    </div>
  </div>

        </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateTeamMember()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent2 {

  @Input() teammember_show;
  @Input() id;

  public users: Array<User>;
  public projects: Array<Project>;
  public teamroles: Array<TeamRole>;

  constructor(
    public activeModal: NgbActiveModal,
    private _teammemberService: TeamMemberService,
    private _userService: UserService,
    private _projectService: ProjectService,
    private _teamroleService: TeamRoleService, ) {
    this.getDataUsers();
    this.getDataProjects();
    this.getDataRoles();
  }

  changeUsername(user_name) {
    this.users.forEach(user => {
      if (user.username == user_name)
        this.teammember_show.username = user_name;
    });
  }

  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.teammember_show.project_name = project.name;
    });
  }

  changeRole(teamrole_name) {
    this.teamroles.forEach(teamrole => {
      if (teamrole.name == teamrole_name)
        this.teammember_show.role = teamrole_name;
    });
  }

  getDataUsers() {
    this._userService.list().subscribe(
      response => {
        if (!response.users) { } else {
          let users = response.users;
          this.users = users;
        }
      },
      error => { }
    );
  }

  getDataProjects() {
    this._projectService.list().subscribe(
      response => {
        if (!response.projects) { } else {
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }
    );
  }

  getDataRoles() {
    this._teamroleService.list().subscribe(
      response => {
        if (!response.teamroles) { } else {
          let teamroles = response.teamroles;
          this.teamroles = teamroles;
        }
      },
      error => { }
    );
  }


  updateTeamMember() {
    this._teammemberService.update(this.teammember_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Team Member has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }

}



@Component({
  selector: 'ngx-smart-table',
  templateUrl: './teammembers.component.html',
  providers: [TeamMemberService, UserService, ProjectService, TeamRoleService],
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
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;

  public teammembers: Array<TeamMember>;
  public users: Array<User>;
  public projects: Array<Project>;
  public teamroles: Array<TeamRole>;


  public teammember_register: TeamMember;

  constructor(
    private service: SmartTableService,
    private _teammemberService: TeamMemberService,
    private _userService: UserService,
    private _projectService: ProjectService,
    private _teamroleService: TeamRoleService,


    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.teammember_register = new TeamMember('', '', '');
    this.teammembers = new Array<TeamMember>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
    this.getDataUsers();
    this.getDataProjects();
    this.getDataRoles();
  }

  open(event) {

    var id = event.data.id;

    var teammember_show = new TeamMember(event.data.username,
      event.data.project_name,
      event.data.role);

    const modalRef = this.modalService.open(NgbdModalContent2, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.teammember_show = teammember_show;

    modalRef.result.then((result) => {
      this.getData();
    });
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

  getDataUsers() {
    this._userService.list().subscribe(
      response => {
        if (!response.users) { } else {
          let users = response.users;
          this.users = users;
        }
      },
      error => { }
    );
  }

  getDataProjects() {
    this._projectService.list().subscribe(
      response => {
        if (!response.projects) { } else {
          let projects = response.projects;
          this.projects = projects;
        }
      },
      error => { }
    );
  }

  getDataRoles() {
    this._teamroleService.list().subscribe(
      response => {
        if (!response.teamroles) { } else {
          let teamroles = response.teamroles;
          this.teamroles = teamroles;
        }
      },
      error => { }
    );
  }

  changeUsername(user_name) {
    this.users.forEach(user => {
      if (user.username == user_name)
        this.teammember_register.username = user_name;
    });
  }

  changeProject(project_name) {
    this.projects.forEach(project => {
      if (project.name == project_name)
        this.teammember_register.project_name = project.name;
    });
  }

  changeRole(teamrole_name) {
    this.teamroles.forEach(teamrole => {
      if (teamrole.name == teamrole_name)
        this.teammember_register.role = teamrole_name;
    });
  }

  insert() {
    this._teammemberService.insert(this.teammember_register).subscribe(
      response => {
        let teammember = response.teammember;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Team Member has been saved',
          showConfirmButton: false,
        })
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

  deleteProject(event): void {
    swal({
      title: 'Delete the Team Member?',
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
          'Your team member has been deleted.',
          'success'
        )
        this._teammemberService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }
        );
      }
    })
  }
}
