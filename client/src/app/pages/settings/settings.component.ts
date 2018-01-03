import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

import swal from 'sweetalert2';

@Component({
  selector: 'ngx-settings',
  providers: [UserService],
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  public user: User;
  public id;
  constructor(private _userService: UserService) {
    this.user = this._userService.getIdentity();
    this.id = this._userService.getIdentity().id;
  }

  updateUser() {
    this._userService.update(this.user, this.id).subscribe(
      response => {
        localStorage.setItem('identity', JSON.stringify(this.user));
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
