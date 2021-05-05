import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demand } from '../demand';
import { DemandsService } from '../demands.service';

@Component({
  selector: 'app-all-demands',
  templateUrl: './all-demands.component.html',
  styleUrls: ['./all-demands.component.css']
})
export class AllDemandsComponent implements OnInit {

  public demands: Demand[] = [];
  public filterLoc: String = "";
  public filterSkill: String = "";

  constructor(private mydemandservice: DemandsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllDemands();
  }

  getAllDemands()
  {
    this.mydemandservice.getDemands().subscribe(
      (data) => {
        this.demands = data;
      }
    )
  }

  viewDemand(id:number)
  {
    this.router.navigate(['viewAudit',id]);
  }

  onFilterSubmit()
  {
    if(this.filterLoc=="" && this.filterSkill=="")
    {
      this.getAllDemands();
    }
    else if((this.filterLoc=="" && this.filterSkill!="") || (this.filterLoc!="" && this.filterSkill==""))
    {
      alert("Please fill all the details for filtering!");
    }
    else
    {
      this.mydemandservice.getDemandFilter(this.filterLoc,this.filterSkill).subscribe(
        (data) => {
          this.demands = data;
        }
      )
    }
  }

}
