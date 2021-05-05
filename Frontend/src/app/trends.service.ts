import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDemandsByLocaction(){
    return this.http.get<any>(`${this.baseUrl}/trends/location`);
  }

  public getDemandsBySkills(){
    return this.http.get<any>(`${this.baseUrl}/trends/skills`);
  }

  public getDistinctYears(): Observable<string[]>{
    return this.http.get<any>(`${this.baseUrl}/trends/distinctYears`);
  }

  public getDistinctLocations(): Observable<string[]>{
    return this.http.get<any>(`${this.baseUrl}/trends/distinctLocations`);
  }

  public getDistinctSkills(): Observable<string[]>{
    return this.http.get<any>(`${this.baseUrl}/trends/distinctSkills`);
  }

  public getCountOfDistinctLocations(){
    return this.http.get<any>(`${this.baseUrl}/trends/yearLocations`);
  }

  public getCountOfDistinctSkills(){
    return this.http.get<any>(`${this.baseUrl}/trends/yearSkills`);
  }

  public getCurrentDistinctLocations(): Observable<string[]>{
    return this.http.get<any>(`${this.baseUrl}/trends/currentDistinctLocations`);
  }

  public getCurrentDistinctSkills(): Observable<string[]>{
    return this.http.get<any>(`${this.baseUrl}/trends/currentDistinctSkills`);
  }

  public getCurrentVacancy(){
    return this.http.get<any>(`${this.baseUrl}/trends/currentVacancy`);
  }
}
