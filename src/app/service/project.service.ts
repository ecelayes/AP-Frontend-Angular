import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServerUrl = environment.apiBaseUrl+'project/';

  constructor(private http: HttpClient) { }

  public listProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiServerUrl+ 'list');
  }

  public findProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.apiServerUrl+ `find/${id}`);
  }

  public saveProject(project: Project): Observable<any> {
    return this.http.post<any>(this.apiServerUrl+ 'create/', project);
  }

  public updateProject(id: number, project: Project): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+ `update/${id}`, project);
  }

  public deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(this.apiServerUrl+ `delete/${id}`);
  }
}
