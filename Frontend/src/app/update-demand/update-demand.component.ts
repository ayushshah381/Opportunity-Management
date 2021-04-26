import { AuditsService } from './../audits.service';
import { Demand } from './../demand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandsService } from '../demands.service';
import { Audit } from '../audit';

@Component({
  selector: 'app-update-demand',
  templateUrl: './update-demand.component.html',
  styleUrls: ['./update-demand.component.css']
})
export class UpdateDemandComponent implements OnInit {

  id: number = 1;
  demand: Demand = <any>{};
  public audit: Audit = <any>{
    aid : 1,
    username: localStorage.getItem('username'),
    useremail: localStorage.getItem('user'),
    action: "",
    date: new Date().toDateString() + " "+ new Date().toTimeString().substring(0,8)
  };

  constructor( private demandservice:DemandsService,
    private route: ActivatedRoute,
    private router: Router,
    private auditservice: AuditsService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user'))
    {
      this.goToLogin();
    }
    this.id = this.route.snapshot.params['id'];
    this.demandservice.getDemandById(this.id).subscribe(
      (data) => {
        this.demand = data;
        console.log(this.demand);
      }
    )
  }

  onSubmit(){
    this.audit.action = "Updated a demand";
    this.auditservice.addAudit(this.audit).subscribe();
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

  goToLogin(){
    this.router.navigate(['']);
  }

}
