import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Demand} from './demand';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDemands(): Observable<Demand[]> {
    return this.http.get<any>(`${this.baseUrl}/demand/viewAll`);
  }

  public getDemandFilter(loc: String,skill:String): Observable<Demand[]>{
    return this.http.get<any>(`${this.baseUrl}/demand/${loc}/${skill}`);
  }

  public getCurrentDemands(): Observable<Demand[]> {
    return this.http.get<any>(`${this.baseUrl}/demand/current`);
  } 

  public getCurrentDemandFilter(loc: String,skill:String): Observable<Demand[]>{
    return this.http.get<any>(`${this.baseUrl}/demand/current/${loc}/${skill}`);
  }
  
  public getLatestId(): Observable<Demand>{
    return this.http.get<any>(`${this.baseUrl}/demand/latest`);
  }

  public getDemandById(id: number): Observable<Demand>{
    return this.http.get<Demand>(`${this.baseUrl}/demand/${id}`);
  }

  public addDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(`${this.baseUrl}/demand/add`,demand);
  } 

  public updateDemand(demand: Demand,id:number): Observable<Demand> {
    return this.http.put<Demand>(`${this.baseUrl}/demand/update/${id}`,demand);
  }

  public deleteDemand(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/demand/delete/${id}`);
  }

}
