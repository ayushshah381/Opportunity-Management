import { Router } from '@angular/router';
import { Demand } from './../demand';
import { Component, OnInit } from '@angular/core';
import { DemandsService } from '../demands.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  public demands: Demand[] = [];
  
  constructor(private mydemandservice: DemandsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDemands();
  }

   getDemands(): void{
    this.mydemandservice.getDemands().subscribe(
      (response: Demand[]) => {
        this.demands = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  deleteDemands(id: number): void{
    this.mydemandservice.deleteDemand(id).subscribe(
      (data)=>{
        this.getDemands();
      }
    )
  }

  updateDemands(id:number): void{
    this.router.navigate(['updateDemand',id]);
  }
  
  viewDemand(id:number): void{
    this.router.navigate(['viewDemand',id]);
  }

  searchDemands(key: String): void{
    const results: Demand[] = [];
    for(const demand of this.demands)
    {
      if(demand.ed_name.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 
      || demand.ed_email.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || demand.description.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || demand.location.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || demand.skills.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      )
      {
        results.push(demand);
      }
    }
    this.demands = results;
    if(results.length === 0 || !key)
    {
      this.getDemands();
    }
  }

}
