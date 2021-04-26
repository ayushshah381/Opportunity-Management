import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDemandsByLocaction(year: String){
    return this.http.get<any>(`${this.baseUrl}/trends/location/${year}`);
  }

  public getDemandsBySkills(year: String){
    return this.http.get<any>(`${this.baseUrl}/trends/skills/${year}`);
  }
}
