import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Audit } from './audit';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAudits(): Observable<Audit[]> {
    return this.http.get<any>(`${this.baseUrl}/audit/viewAll`);
  }

  public addAudit(audit: Audit): Observable<Audit> {
    return this.http.post<Audit>(`${this.baseUrl}/audit/add`,audit);
  }
  
  public getAuditByDemandId(id: number): Observable<Audit[]>{
    return this.http.get<any>(`${this.baseUrl}/audit/byDemandId/${id}`);
  }

}
