import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private constructor(private http: HttpClient) { }

  /*public login(params: JSON) {
    return this.http.post(SERVER_URL + "login", params);
  }*/
  public user(): Observable<IUser[]> {
    return this.http.get<IUser[]>(SERVER_URL + "users");
  }
}
