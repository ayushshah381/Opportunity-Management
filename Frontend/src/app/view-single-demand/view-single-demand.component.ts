import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demand } from '../demand';
import { DemandsService } from '../demands.service';

@Component({
  selector: 'app-view-single-demand',
  templateUrl: './view-single-demand.component.html',
  styleUrls: ['./view-single-demand.component.css']
})
export class ViewSingleDemandComponent implements OnInit {

  id: number = 1;
  demand: Demand = <any>{};
  constructor( private demandservice:DemandsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user'))
    {
      this.goToLogin();
    }
    this.id = this.route.snapshot.params['id'];
    this.demandservice.getDemandById(this.id).subscribe(
      (data) => {
        this.demand = data;
      }
    )
  }

  onBack(){
    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['','home']);
  }

  goToLogin(){
    this.router.navigate(['']);
  }

}
