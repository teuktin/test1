import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IListProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private constructor(private http: HttpClient) { }

  /*public login(params: JSON) {
    return this.http.post(SERVER_URL + "login", params);
  }*/
  public product(): Observable<IListProduct> {
    return this.http.get<IListProduct>(SERVER_URL + "product");
  }
}
