import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss']
})
export class RadialComponent {

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [90],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%"
          }
        }
      },
      labels: ["Cricket"]
    };
  }
}
