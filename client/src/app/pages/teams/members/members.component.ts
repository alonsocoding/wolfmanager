import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';
import swal from 'sweetalert2';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import { OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ngbd-modal-content',
  providers: [UserService],
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
            <label for="inputFirstName" class="col-sm-3 col-form-label">First Name</label>
            <div class="col-sm-9">
              <input name="first_name" [(ngModel)]="user_show.first_name" type="name" class="form-control" id="inputFirstName" placeholder="Enter the first name of the member">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputLastName" class="col-sm-3 col-form-label">Last Name</label>
            <div class="col-sm-9">
              <input name="last_name" [(ngModel)]="user_show.last_name" type="name" class="form-control" id="inputLastName" placeholder="Enter the last name of the member">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputUsername" class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-9">
              <input name="username" [(ngModel)]="user_show.username" type="name" class="form-control" id="inputUsername" placeholder="Enter the username of the member">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <input name="email" [(ngModel)]="user_show.email" type="name" class="form-control" id="inputEmail" placeholder="Enter the email of the member">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
              <input name="password" [(ngModel)]="user_show.password" type="name" class="form-control" id="inputPassword" placeholder="Enter the password of the member">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputRole" class="col-sm-3 col-form-label">Role</label>
            <div class="col-sm-9">
              <input name="role" [(ngModel)]="user_show.role" type="name" class="form-control" id="inputRole" placeholder="Enter the role of the member">
            </div>
          </div>



        </form><hr>

    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-warning" (click)="updateUser()">Update</button>
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  @Input() user_show;
  @Input() id;

  constructor(
    public activeModal: NgbActiveModal,
    private _userService: UserService ) {

  }


  updateUser() {
    this._userService.update(this.user_show, this.id).subscribe(
      response => {
        swal({
          type: 'success',
          title: 'User has been updated',
          showConfirmButton: false,
        })
      },
      error => { }
    );
  }

}






@Component({
  selector: 'ngx-smart-table',
  templateUrl: './members.component.html',
  providers: [UserService],
  styleUrls: ['./members.component.scss'],

})

export class MembersComponent {
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
        type: 'string',
      },
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      role: {
        title: 'Role Name',
        type: 'string',
      },
      createdAt: {
        title: 'Joined',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          var d = new Date(row.createdAt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            time = d.getHours() + ':' + d.getMinutes();

          if (month.length < 2) month = '0' + month;
          if (day.length < 2) day = '0' + day;

          return [day, month, year].join('-');
        }
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  btn_settings: Array<any>;
  public users: Array<User>; // Arreglo de asociados
  public user_register: User;

  constructor(
    private service: SmartTableService,
    private _userService: UserService,
    private themeService: NbThemeService,
    private modalService: NgbModal) {

    this.user_register = new User('', '','','','','');
    this.users = new Array<User>();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
    this.getData();
  }


  getData() {
    this._userService.list().subscribe(
      response => {
        if (!response.users) { } else {
          this.source.load(response.users);
          let users = response.users;
          this.users = users;
        }
      },
      error => { }
    );
  }

  open(event) {

    var id = event.data.id;

    var user_show = new User(event.data.first_name,
      event.data.last_name,event.data.username,event.data.email,
      event.data.password,event.data.role);

    const modalRef = this.modalService.open(NgbdModalContent, {
      size: 'lg',
    });

    modalRef.componentInstance.id = id;
    modalRef.componentInstance.user_show = user_show;

    modalRef.result.then((result) => {
      this.getData();
    });
  }

  insert() {
    this._userService.insert(this.user_register).subscribe(
      response => {
        let user = response.user;
        this.source = new LocalDataSource();
        this.getData();
        swal({
          type: 'success',
          title: 'Member has been saved',
          showConfirmButton: false,
        })
        if (!user) { } else {
          this.user_register = user;
          this.user_register = new User('', '','','','','');
        }
      },
      error => { }
    );
    console.log(this.user_register);
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
      title: 'Delete the member?',
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
          'The member has been deleted.',
          'success'
        )
        this._userService.delete(event.data.id).subscribe(
          response => {
            this.getData();
          },
          error => { }	
        );
      }
    })
  }
}
