import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AuditsService } from './audits.service';
import { Audit } from './audit';
import { of } from 'rxjs';

describe('AuditsService', () => {
  let service: AuditsService;
  let httpClient: HttpClient;
  let a: Audit = <Audit>{};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuditsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Call Get All Audits API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getAudits();
    expect(service.getAudits).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Get Audits By DemandId API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getAuditByDemandId(91);
    expect(service.getAuditByDemandId).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Add Audit API', () => {
    spyOn(httpClient, 'post').and.returnValue( of ([]));
    service.addAudit(a);
    expect(service.addAudit).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  
});
