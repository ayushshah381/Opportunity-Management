import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DemandsService } from './demands.service';
import { of } from 'rxjs';
import { Demand } from './demand';

describe('DemandsService', () => {
  let service: DemandsService;
  let httpClient: HttpClient;
  let d: Demand = <Demand>{};
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DemandsService]
    });
    service = TestBed.inject(DemandsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Call Get All Demands API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDemands();
    expect(service.getDemands).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Delete Demands API', () => {
    spyOn(httpClient, 'delete').and.returnValue( of ([]));
    service.deleteDemand(1);
    expect(service.deleteDemand).toBeTruthy();
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it('Should Call Add Demand API', () => {
    spyOn(httpClient, 'post').and.returnValue( of ([]));
    service.addDemand(d);
    expect(service.addDemand).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('Should Call Update Demand API', () => {
    spyOn(httpClient, 'put').and.returnValue( of ([]));
    service.updateDemand(d,1);
    expect(service.updateDemand).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalled();
  });

  it('Should Call Get Latest Demand API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getLatestId();
    expect(service.getLatestId).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Get Current Demands API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCurrentDemands();
    expect(service.getCurrentDemands).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Get Demand By Id API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDemandById(1);
    expect(service.getDemandById).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Get Current Demands Filter API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCurrentDemandFilter("Mumbai","Java");
    expect(service.getCurrentDemandFilter).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Call Get Demands Filter API', () => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDemandFilter("Mumbai","Java");
    expect(service.getDemandFilter).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  


});
