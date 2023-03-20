import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl+'auth/';

  constructor(private httpClient: HttpClient) { }
 
  public loginUser(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.apiServerUrl+ 'login', loginUser)
  }
}
