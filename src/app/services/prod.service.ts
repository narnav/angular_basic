import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User_model } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  counter: number = 2;
  MYSERVER: string = 'https://jsonplaceholder.typicode.com/users/';
  // MYSERVER: string = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) {}

  // read
  getdata(): Observable<User_model[]> {
    return this.http.get<User_model[]>(this.MYSERVER);
  }

  // create
  createData(myNewData: any) {
    return this.http.post(this.MYSERVER, myNewData);
  }

  // delete
  delData(id: any) {
    return this.http.delete(this.MYSERVER + id);
  }
  // update
  updData(id: any, myNewData: any) {
    return this.http.put(this.MYSERVER + id, myNewData);
  }
}
