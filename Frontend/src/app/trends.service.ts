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
}
