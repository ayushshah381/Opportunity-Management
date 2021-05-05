import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Audit } from '../audit';
import { AuditsService } from '../audits.service';

@Component({
  selector: 'app-singleaudit',
  templateUrl: './singleaudit.component.html',
  styleUrls: ['./singleaudit.component.css']
})
export class SingleauditComponent implements OnInit {

  constructor(private aservice:AuditsService,
    private route: ActivatedRoute,
    private router: Router) { }

  audits: Audit[] = [];
  id:number = 1;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.aservice.getAuditByDemandId(this.id).subscribe(
      (data) => {
        this.audits = data;
      }
    )
  }

  goToLogin()
  {
    this.router.navigate(['']);
  }

  onBack()
  {
    this.router.navigate(['','allDemands']);
  }

}
