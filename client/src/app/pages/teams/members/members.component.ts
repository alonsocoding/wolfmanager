import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

import { SmartTableService } from '../../../@core/data/smart-table.service';
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

  insert() {
    this._userService.insert(this.user_register).subscribe(
      response => {
        let user = response.user;
        this.source = new LocalDataSource();
        this.getData();
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

  deleteProject(): void {
    console.log("delete");
  }
}
