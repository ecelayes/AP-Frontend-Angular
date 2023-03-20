import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiServerUrl = environment.apiBaseUrl+'person/';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.apiServerUrl+ `find/1`);
  }

  public updatePerson(updatePerson: Person): Observable<any> {
    return this.http.put<any>(this.apiServerUrl+ `update/1`, updatePerson);
  }
}
