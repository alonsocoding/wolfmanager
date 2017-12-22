import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    icon: 1,
    name: 'Sudoku',
    category: 'Completed',
    team: 'jose, sofia',
    progres: '80%',
  }, {
    icon: 2,
    name: 'Ajedrez',
    category: 'Completed',
    team: 'jose, sofia, diego',
    progres: '100%',
  }, {
    icon: 3,
    name: 'Facturacion',
    category: 'In Progress',
    team: 'jose',
    progres: '20%',
  }, {
    icon: 4,
    name: 'Asociacion',
    category: 'Cencelled',
    team: 'jose, nela',
    progres: '0%',
  }, {
    icon: 5,
    name: 'Grafico',
    category: 'In Progress',
    team: 'jose, sofia, diego',
    progres: '50%',
  }];

  getData() {
    return this.data;
  }
}
