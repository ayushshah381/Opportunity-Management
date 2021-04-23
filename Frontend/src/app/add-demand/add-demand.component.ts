import { Demand } from './../demand';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DemandsService} from '../demands.service';


@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.css']
})
export class AddDemandComponent implements OnInit {

  public demand: Demand = <any>{};

  constructor(private demandService: DemandsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveDemand(){
    this.demandService.addDemand(this.demand).subscribe(
      (data) => {
        this.goToHome();
      }
    )
  }

  goToHome(): void
  {
    this.router.navigate(['/','home']);
  } 

  onSubmit(){
    console.log(this.demand);
    this.saveDemand();
  }
}
