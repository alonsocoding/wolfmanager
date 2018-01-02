import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamRoleService } from '../../../services/teamrole.service';
import { TeamRole } from '../../../models/TeamRole';
import swal from 'sweetalert2';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngbd-modal-content',
  providers: [TeamRoleService],
  template: `
    <div class="modal-header modal-lg">
      <h4 class="modal-title">User Information</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <form>
    <form>
    <div class="form-group row">
      <label for="inputName" class="col-sm-3 col-form-label">File Name</label>
      <div class="col-sm-9">
        <input name="name" [(ngModel)]="teamrole_show.name" type="name" class="form-control" id="inputName" placeholder="Enter the name of the task">
      </div>
    </div>
    <div class="form-group validation-checkboxes row">
    <label for="inputName" class="col-sm-12 col-form-label">
      <strong>Permission</strong>
      <hr>
    </label>
    <label for="inputName" class="col-sm-4 col-form-label">Project Admin
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="project" [(ngModel)]="teamrole_show.project">Complete access to all sections of Project</nb-checkbox>
    <label for="inputName" class="col-sm-4 col-form-label">Task Project Role
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="task" [(ngModel)]="teamrole_show.task">Can add, edit and remove tasks for the Project</nb-checkbox>
    <label for="inputName" class="col-sm-4 col-form-label">Team Project Role
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="team" [(ngModel)]="teamrole_show.team">Can add, edit and remove members on the Project, Can't remove Admins</nb-checkbox>
    <label for="inputName" class="col-sm-4 col-form-label">Finance Project Role
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="finance" [(ngModel)]="teamrole_show.finance">Can add, edit and remove entries for Project Finance</nb-checkbox>
    <label for="inputName" class="col-sm-4 col-form-label">Notes Project Role
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="notes" [(ngModel)]="teamrole_show.notes">Can add, edit and remove notes for Project</nb-checkbox>
    <label for="inputName" class="col-sm-4 col-form-label">Map Project Role
      <br>
    </label>
    <nb-checkbox status="success" class="col-sm-8" name="map" [(ngModel)]="teamrole_show.map">Can view the map for Project</nb-checkbox>
  </div>

  </form>

        </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateTeamRole()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent3 {

  @Input() teamrole_show;
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private _teamroleService: TeamRoleService, ) {
  }
  updateTeamRole() {
    this._teamroleService.update(this.teamrole_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'Team Role has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }

}



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
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          var permissions = new Array;
          row.project ? permissions.push(`<span class="badge badge-success">Project</span>`) : false;
          row.task ? permissions.push(`<span class="badge badge-success">Tasks</span>`) : false;
          row.team ? permissions.push(`<span class="badge badge-success">Teams</span>`) : false;
          row.finance ? permissions.push(`<span class="badge badge-success">Finance</span>`) : false;
          row.notes ? permissions.push(`<span class="badge badge-success">Note</span>`) : false;
          row.map ? permissions.push(`<span class="badge badge-success">Map</span>`) : false;  
          return permissions;
        }
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

  open(event) {

    var id = event.data.id;

    var teamrole_show = new TeamRole(event.data.name,
      event.data.project,
      event.data.task,
      event.data.team,
      event.data.time,
      event.data.file,
      event.data.calendar,
      event.data.finance,
      event.data.notes,
      event.data.reports,
      event.data.client,
      event.data.map);

    const modalRef = this.modalService.open(NgbdModalContent3, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.teamrole_show = teamrole_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }

  insert() {
    this._teamroleService.insert(this.teamrole_register).subscribe(
      response => {
        let teamrole = response.teamrole;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Team Role has been saved',
          showConfirmButton: false,
        })
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

  deleteProject(event): void {
    swal({
      title: 'Delete the team role?',
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
          'Your team role has been deleted.',
          'success'
        )
        this._teamroleService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }	
        );
      }
    })
  }
}
