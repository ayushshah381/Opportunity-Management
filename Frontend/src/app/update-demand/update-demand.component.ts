import { Demand } from './../demand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandsService } from '../demands.service';

@Component({
  selector: 'app-update-demand',
  templateUrl: './update-demand.component.html',
  styleUrls: ['./update-demand.component.css']
})
export class UpdateDemandComponent implements OnInit {

  id: number = 1;
  demand: Demand = <any>{};
  constructor( private demandservice:DemandsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.demandservice.getDemandById(this.id).subscribe(
      (data) => {
        this.demand = data;
        console.log(this.demand);
      }
    )
  }

  onSubmit(){
    this.demandservice.updateDemand(this.demand,this.id).subscribe(
      (data) => {
        console.log(data);
        this.goToHome();
      }
    )
  }

  goToHome(){
    this.router.navigate(['/','home']);
  }



}
