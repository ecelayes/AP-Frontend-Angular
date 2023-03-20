import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiServerUrl = environment.apiBaseUrl+'education/';

  constructor(private http: HttpClient) { }

  public listEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiServerUrl+ 'list');
  }

  public findEducation(id: number): Observable<Education> {
    return this.http.get<Education>(this.apiServerUrl+ `find/${id}`);
  }

  public saveEducation(education: Education): Observable<any> {
    return this.http.post<any>(this.apiServerUrl+ 'create/', education);
  }

  public updateEducation(id: number, education: Education): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+ `update/${id}`, education);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.apiServerUrl+ `delete/${id}`);
  }
}
