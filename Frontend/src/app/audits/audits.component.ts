import { Router } from '@angular/router';
import { AuditsService } from './../audits.service';
import { Component, OnInit } from '@angular/core';
import { Audit } from '../audit';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.css']
})
export class AuditsComponent implements OnInit {

  constructor(private aservice:AuditsService,
    private router: Router) { }

  audits: Audit[] = [];

  ngOnInit(): void {
    this.aservice.getAudits().subscribe(
      (data) => {
        this.audits = data;
      }
    )
  }

  searchAudits(key: String): void{
    const results: Audit[] = [];
    for(const audit of this.audits)
    {
      if(audit.action.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 
      || String(audit.demandId).toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || audit.date.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || audit.useremail.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || audit.username.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      )
      {
        results.push(audit);
      }
    }
    this.audits = results;
    if(results.length === 0 || !key)
    {
      this.aservice.getAudits().subscribe(
        (data) => {
          this.audits = data;
        }
      )
    }
  }

  goToLogin(){
    this.router.navigate(['']);
  }

}
