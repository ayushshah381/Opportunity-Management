import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TrendsService } from './trends.service';
import { of } from 'rxjs';

describe('TrendsService', () => {
  let service: TrendsService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TrendsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Call Get Count of Distinct Locations API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCountOfDistinctLocations();
    expect(service.getCountOfDistinctLocations).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Count of Distinct Skills API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCountOfDistinctSkills();
    expect(service.getCountOfDistinctSkills).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Current Distinct Locations API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCurrentDistinctLocations();
    expect(service.getCurrentDistinctLocations).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Count of Distinct Skills API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCurrentDistinctSkills();
    expect(service.getCurrentDistinctSkills).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Current Vacancy API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getCurrentVacancy();
    expect(service.getCurrentVacancy).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Demands By Location API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDemandsByLocaction();
    expect(service.getDemandsByLocaction).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Demands By Skills API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDemandsBySkills();
    expect(service.getDemandsBySkills).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Distinct Location API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDistinctLocations();
    expect(service.getDistinctLocations).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Distinct Skills API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDistinctSkills();
    expect(service.getDistinctSkills).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('Should Call Get Distinct Years API',() => {
    spyOn(httpClient, 'get').and.returnValue( of ([]));
    service.getDistinctYears();
    expect(service.getDistinctYears).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  })

  
});
