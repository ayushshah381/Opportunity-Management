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
    if(!localStorage.getItem('user'))
    {this.goToLogin();}
    this.aservice.getAudits().subscribe(
      (data) => {
        this.audits = data;
      }
    )
  }

  goToLogin(){
    this.router.navigate(['']);
  }

}
