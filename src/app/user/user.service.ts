import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';



@Injectable({
  providedIn: 'root'
})
export class UserService {
baseulr1: string = "http://localhost:8080/api/users/"
  constructor(
    private http: HttpClient
  ) { }
  list(): Observable <User[]> {

    return this.http.get(`${this.baseulr1}`) as Observable<User[]>;
  
  }
  
}
