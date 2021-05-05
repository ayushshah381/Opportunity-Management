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

  todayDate: String =  new Date().toISOString().slice(0, 10);

  public demand: Demand = <any>{};
  public audit: Audit = <any>{
    aid : 1,
    username: localStorage.getItem('username'),
    useremail: localStorage.getItem('user'),
    action: "",
    date: new Date().toDateString() + " "+ new Date().toTimeString().substring(0,8),
    demandId: 1
  };
  constructor(private demandService: DemandsService,
    private router: Router,
    private auditservice: AuditsService) { }

  ngOnInit(): void {
    // console.log(this.todayDate);
  }

  saveDemand(){
    this.demandService.addDemand(this.demand).subscribe(
        (data) => {
          this.audit.action = "New Demand added";
          this.demandService.getLatestId().subscribe(
          (data2) => {
            this.audit.demandId = data2.did;
            console.log(data2.did);
            console.log(this.audit);
            this.auditservice.addAudit(this.audit).subscribe(
              (data) => {
                this.goToHome();
              }
            )
          }
        );
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
    if(this.demand.ed_name=="" || this.demand.ed_email=="" || this.demand.endDate==null || this.demand.location=="" || this.demand.skills=="" || this.demand.vacancy==null)
    {alert("Please fill all details!");}
    else
    {
      this.saveDemand();
    }
  }
}
