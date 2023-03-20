import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiServerUrl = environment.apiBaseUrl+'experience/';

  constructor(private http: HttpClient) { }

  public listExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiServerUrl+ 'list');
  }

  public findExperience(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.apiServerUrl+ `find/${id}`);
  }

  public saveExperience(experience: Experience): Observable<any> {
    return this.http.post<any>(this.apiServerUrl+ 'create/', experience);
  }

  public updateExperience(id: number, experience: Experience): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+ `update/${id}`, experience);
  }

  public deleteExperience(id: number): Observable<any> {
    return this.http.delete<any>(this.apiServerUrl+ `delete/${id}`);
  }
}
