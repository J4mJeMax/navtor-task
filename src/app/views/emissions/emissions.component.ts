import { Component } from '@angular/core';
import {EmissionsService} from "../../services/emissions/emissions.service";
import * as Highcharts from 'highcharts';
import {Emission} from "../../shared/interfaces/emissions/emissions";
import {VesselsService} from "../../services/vessels/vessels.service";
import {Vessel} from "../../shared/interfaces/vessels/vessels";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent {
  emissionsData: Emission[] = [];
  selectedVessel: string = '';
  vessels: any[] = [];
  chart: Highcharts.Chart | undefined;

  constructor(
    private emissionsService: EmissionsService,
    private vesselsService: VesselsService,
  ) {}

  ngOnInit() {
    forkJoin([
      this.vesselsService.getVessels(),
      this.emissionsService.getEmissions()
    ]).subscribe(([vessels, emissions]) => {
      this.emissionsData = emissions;
      this.assignVesselsToEmissionData(vessels);
    });
  }

  assignVesselsToEmissionData(vessels: Vessel[]) {
    vessels.forEach((vessel) => {
      this.emissionsData.forEach((emission) => {
        if (emission.id === vessel.id) {
          emission.vesselName = vessel.name;
        }
      });
      this.vessels = this.emissionsData.map((item) => item.vesselName);
    });
  }

  onVesselChange() {
    this.initializeChart(this.selectedVessel);
  }

  initializeChart(title: string = '') {
    this.chart = Highcharts.chart('highcharts-container', {
      chart: {
        backgroundColor: '#091a32',
      },
      title: {
        text: title,
        style: {
          color: 'white'
        }
      },
      xAxis: {
        categories: [],
        type: 'datetime',
        labels: {
          formatter: function () {
            const timestamp = Number(this.value);

            if (timestamp === this.axis.min || (timestamp % (10 * 24 * 3600 * 1000) === 0)) {
              const date = new Date(timestamp);
              const day = date.getDate();
              const month = date.toLocaleString('default', { month: 'short' });
              const year = date.getFullYear();

              return day + ' ' + month + ' ' + year;
            } else {
              return '';
            }
          },
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Emissions',
          style: {
            color: 'white'
          }
        },
      },
      series: [],
    });

    this.updateChart();
  }


  updateChart() {
    if (this.selectedVessel) {
      const filteredData = this.emissionsData.find((item) => item.vesselName === this.selectedVessel);

      if (filteredData) {
        const timeSeries = filteredData.timeSeries;

        const CO2EmissionsData = timeSeries.map((item) => [
          new Date(item.report_from_utc).getTime(),
          item.co2_emissions,
        ]);

        const SOXEmissionsData = timeSeries.map((item) => [
          new Date(item.report_from_utc).getTime(),
          item.sox_emissions,
        ]);

        const CH4EmissionsData = timeSeries.map((item) => [
          new Date(item.report_from_utc).getTime(),
          item.ch4_emissions,
        ]);

        const NOXEmissionsData = timeSeries.map((item) => [
          new Date(item.report_from_utc).getTime(),
          item.nox_emissions,
        ]);

        const PMEmissionsData = timeSeries.map((item) => [
          new Date(item.report_from_utc).getTime(),
          item.pm_emissions,
        ]);

        this.chart?.xAxis[0].setExtremes(
          CO2EmissionsData[0][0],
          CO2EmissionsData[CO2EmissionsData.length - 1][0]
        );

        this.chart?.series.forEach((series) => series.remove());
        this.chart?.addSeries({
          name: 'SOX',
          data: SOXEmissionsData,
          type: 'line',
        });
        this.chart?.addSeries({
          name: 'Methane',
          data: CH4EmissionsData,
          type: 'line',
        });
        this.chart?.addSeries({
          name: 'NOX',
          data: NOXEmissionsData,
          type: 'line',
        });
        this.chart?.addSeries({
          name: 'PM',
          data: PMEmissionsData,
          type: 'line',
        });
      }
    }
  }
}
