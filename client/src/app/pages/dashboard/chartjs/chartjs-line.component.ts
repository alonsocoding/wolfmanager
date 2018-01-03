import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { EntryService } from '../../../services/entry.service';
import { Entry } from '../../../models/entry';

@Component({
  selector: 'ngx-chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  public entries: Array<any>; 
  public incomes; public expenses;
  public total_income; public total_expense; public total;

  constructor(private theme: NbThemeService,
    private _entryService: EntryService,) {

    this.entries = new Array<Entry>();
    this.incomes = [0,0,0,0,0,0,0,0,0,0,0,0];
    this.expenses = [0,0,0,0,0,0,0,0,0,0,0,0];
    this.total_income = 0; 
    this.total_expense = 0;
    this.total = 0;

    this.getData();
    this.calculate();

    console.log(this.incomes);
    console.log(this.expenses);

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March',
                 'April', 'May', 'June', 'July',
                 'August','September','October',
                 'November','December'],
        datasets: [{
          data: this.expenses,//[65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
          label: 'Expenses',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        }, {
          data: this.incomes,//[28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90],
          label: 'Incomes',
          backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.3),
          borderColor: colors.success,
        }
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  calculate() {
    for(var i=0; i<12; i++) {
      this.total_income += this.incomes[i];
      this.total_expense += this.expenses[i];
    }
    this.total = this.total_income - this.total_expense;
  }

  getData() {
    this._entryService.list().subscribe(
      response => {
        if (!response.entries) { } else {
          let entries = response.entries;
          this.entries = entries;
          this.entries.forEach(entry => {
            var month = new Date(entry.createdAt);
            switch(month.getMonth() + 1) {
              case 1: entry.amount > 0 ? this.incomes[0] += parseInt(entry.amount) : this.expenses[0] += parseInt(entry.amount)*-1; break;
              case 2: entry.amount > 0 ? this.incomes[1] += parseInt(entry.amount) : this.expenses[1] += parseInt(entry.amount)*-1; break;
              case 3: entry.amount > 0 ? this.incomes[2] += parseInt(entry.amount) : this.expenses[2] += parseInt(entry.amount)*-1; break;
              case 4: entry.amount > 0 ? this.incomes[3] += parseInt(entry.amount) : this.expenses[3] += parseInt(entry.amount)*-1; break;
              case 5: entry.amount > 0 ? this.incomes[4] += parseInt(entry.amount) : this.expenses[4] += parseInt(entry.amount)*-1; break;
              case 6: entry.amount > 0 ? this.incomes[5] += parseInt(entry.amount) : this.expenses[5] += parseInt(entry.amount)*-1; break;
              case 7: entry.amount > 0 ? this.incomes[6] += parseInt(entry.amount) : this.expenses[6] += parseInt(entry.amount)*-1; break;
              case 8: entry.amount > 0 ? this.incomes[7] += parseInt(entry.amount) : this.expenses[7] += parseInt(entry.amount)*-1; break;
              case 9: entry.amount > 0 ? this.incomes[8] += parseInt(entry.amount) : this.expenses[8] += parseInt(entry.amount)*-1; break;
              case 10: entry.amount > 0 ? this.incomes[9] += parseInt(entry.amount) : this.expenses[9] += parseInt(entry.amount)*-1; break;
              case 11: entry.amount > 0 ? this.incomes[10] += parseInt(entry.amount) : this.expenses[10] += parseInt(entry.amount)*-1; break;
              case 12: entry.amount > 0 ? this.incomes[11] += parseInt(entry.amount) : this.expenses[11] += parseInt(entry.amount)*-1; break;
            }
          });
        }
      },
      error => { }
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
