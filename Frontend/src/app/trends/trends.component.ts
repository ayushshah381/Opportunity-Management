import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../trends.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  public trendsLocation!: { [x: string]: any; };
  public trendsSkills!: { [x: string]: any; };
  

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: 
    { 
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          }
        }
      ], 
    yAxes: [{ticks: {
      beginAtZero: true
    }}], }
  };
  barChartLabels: Label[] = [];
  barChartLabelsSkills: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartTypeSkills: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Colors[] = [{ 
    backgroundColor:["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    borderWidth:[2,2,2,2,2],
    borderColor: "#000000"
  }];

  barChartColorsSkills: Colors[] = [{ 
    backgroundColor: ['#00429d', '#2b57a7', '#426cb0', '#5681b9', '#6997c2', '#7daeca', '#93c4d2', '#abdad9', '#caefdf', '#ffffe0']
  }];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Locations' }
  ];

  barChartDataSkills: ChartDataSets[] = [
    {data: [], label: 'Trending Skills'}
  ]


  constructor(private trendservice: TrendsService,
    private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user'))
    {
      this.goToLogin();
    }
    this.getDemandsByLoc();
    this.getDemandsBySkills();
  }

  getDemandsByLoc(){
    this.trendservice.getDemandsByLocaction().subscribe(
      (data) => {
        this.trendsLocation = data;
        Object.keys(this.trendsLocation).forEach((key) => {
          if(key === "0")
          {
            this.barChartLabels = this.trendsLocation[key];
          }
          else
          {
            this.barChartData[0].data = this.trendsLocation[key];
          }
        });
      }
    )
  }

  getDemandsBySkills(){
    this.trendservice.getDemandsBySkills().subscribe(
      (data) => {
        this.trendsSkills = data;
        Object.keys(this.trendsSkills).forEach((key) => {
          if(key === "0")
          {
            this.barChartLabelsSkills = this.trendsSkills[key];
          }
          else
          {
            this.barChartDataSkills[0].data = this.trendsSkills[key];
          }
        })
      }
    )
    console.log(this.barChartDataSkills);
  }

  goToLogin(){
    this.router.navigate(['']);
  }

}
