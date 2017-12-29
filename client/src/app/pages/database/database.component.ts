import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { LocalDataSource } from 'ng2-smart-table';
import { NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-database',
  styleUrls: ['./database.component.scss'],
  templateUrl: './database.component.html',
})

export class DatabaseComponent {

  constructor() { }

}
