import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../trends.service';
import { ChartColor, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';



@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  public trendsLocation!: { [x: string]: any; };
  public trendsSkills!: { [x: string]: any; };

  //For current locations and skills
  locbarChartOptions: ChartOptions = {
    responsive: true,
  };
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
  barChartType: ChartType = 'doughnut';
  barChartTypeSkills: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins: any = [];
  barChartColors: Colors[] = [{ 
    backgroundColor:["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    borderWidth:3
  }];

  barChartColorsSkills: Colors[] = [{ 
    backgroundColor: 
    ["#499DB7","#37A8B8","#2AB3B5","#2BBEAE","#3DC8A5","#55D09A","#71D88D","#8EDF7F","#ACE573","#CCE968"],
    borderWidth: 2
  }];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Locations' }
  ];

  barChartDataSkills: ChartDataSets[] = [
    {data: [], label: 'Trending Skills'}
  ]


  //For Current Vacancy
  public CurrbarChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{ticks: {
      beginAtZero: true,
    }}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public CurrChartColors: ChartColor = ['#00429d', '#3762ac', '#5185ba', '#66a9c7', '#77cfd2', '#3ffeb9', '#5bfcc6', '#6ffbd3', '#80f9e0', '#98f5f5'];
  public CurrbarChartLabels: Label[] = [];
  public CurrbarChartType: ChartType = 'bar';
  public CurrbarChartLegend = true;
  public CurrbarChartData: ChartDataSets[] = [];

  // For Distinct Locations
  public DistbarChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{ticks: {
      beginAtZero: true,
    }}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public DistChartColors: ChartColor = ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"];
  public DistbarChartLabels: Label[] = [];
  public DistbarChartType: ChartType = 'bar';
  public DistbarChartLegend = true;
  public DistbarChartData: ChartDataSets[] = [];

  // For distinct Skills
  public SkillDistbarChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{ticks: {
      beginAtZero: true,
    }}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public SkillDistChartColors: ChartColor = ["#2F3446","#2F475B","#295C6D","#1F727A","#1B8882","#2C9E84","#4BB381","#71C77A","#9CD971","#CCE968"];
  public SkillDistbarChartLabels: Label[] = [];
  public SkillDistbarChartType: ChartType = 'bar';
  public SkillDistbarChartLegend = true;
  public SkillDistbarChartData: ChartDataSets[] = [];

  constructor(private trendservice: TrendsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDemandsByLoc();
    this.getDemandsBySkills();
    this.getVacancyTrend();
    this.getLocTrend();
    this.getSkillTrend();
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
  }

  goToLogin(){
    this.router.navigate(['']);
  }

  getVacancyTrend()
  {
    this.trendservice.getCurrentDistinctLocations().subscribe(
      (data) => { this.CurrbarChartLabels = data;}
    )
    this.trendservice.getCurrentDistinctSkills().subscribe(
      (data) => {
        this.trendservice.getCurrentVacancy().subscribe(
          (data2) => {
            Object.keys(data2).forEach((key) => {
              let tempObj: ChartDataSets = <any>{};
              tempObj.data = data2[key];
              tempObj.label = data[key];
              tempObj.backgroundColor = this.CurrChartColors[key];
              this.CurrbarChartData.push(tempObj);
            });
          }
        )
        this.CurrbarChartData.splice(0,1);
      }
    )
  }


  getLocTrend()
  {
    this.trendservice.getDistinctYears().subscribe(
      (data) => {
        this.DistbarChartLabels = data;
      }
    )
    this.trendservice.getDistinctLocations().subscribe(
      (data) => {
        this.trendservice.getCountOfDistinctLocations().subscribe(
          (data2) => {
            Object.keys(data2).forEach((key) => {
              let tempObj: ChartDataSets = <any>{};
              tempObj.data = data2[key];
              tempObj.label = data[key];
              tempObj.backgroundColor = this.DistChartColors[key];
              this.DistbarChartData.push(tempObj);
            });
          }
        )
        this.DistbarChartData.splice(0,1);
      }
    )
  }

  getSkillTrend()
  {
    this.trendservice.getDistinctYears().subscribe(
      (data) => {
        this.SkillDistbarChartLabels = data;
      }
    )
    this.trendservice.getDistinctSkills().subscribe(
      (data) => {
        this.trendservice.getCountOfDistinctSkills().subscribe(
          (data2) => {
            Object.keys(data2).forEach((key) => {
              let tempObj: ChartDataSets = <any>{};
              tempObj.data = data2[key];
              tempObj.label = data[key];
              tempObj.backgroundColor = this.SkillDistChartColors[key];
              this.SkillDistbarChartData.push(tempObj);
            });
          }
        )
        this.SkillDistbarChartData.splice(0,1);
      }
    )
  }

}
