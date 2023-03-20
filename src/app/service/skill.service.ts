import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiServerUrl = environment.apiBaseUrl+'skill/';

  constructor(private http: HttpClient) { }

  public listSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiServerUrl+ 'list');
  }

  public findSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.apiServerUrl+ `find/${id}`);
  }

  public saveSkill(skill: Skill): Observable<any> {
    return this.http.post<any>(this.apiServerUrl+ 'create/', skill);
  }

  public updateSkill(id: number, skill: Skill): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+ `update/${id}`, skill);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.apiServerUrl+ `delete/${id}`);
  }
}
