import { AuditsService } from './../audits.service';
import { Demand } from './../demand';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DemandsService} from '../demands.service';
import { Audit } from '../audit';


@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.css']
})
export class AddDemandComponent implements OnInit {

  public demand: Demand = <any>{};
  public audit: Audit = <any>{
    aid : 1,
    username: localStorage.getItem('username'),
    useremail: localStorage.getItem('user'),
    action: "",
    date: new Date().toDateString() + " "+ new Date().toTimeString().substring(0,8)
  };
  constructor(private demandService: DemandsService,
    private router: Router,
    private auditservice: AuditsService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user'))
    {this.goToLogin();}
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
  
  goToLogin(): void
  {
    this.router.navigate(['']);
  }

  onSubmit(){
    this.audit.action = "New Demand added";
    this.auditservice.addAudit(this.audit).subscribe(
      (data) => {console.log(data);}
    )
    this.saveDemand();
  }
}
