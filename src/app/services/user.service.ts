import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string ="http://3.14.149.117/PerformanceEvaluator";

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   login(user : User){
     let headers = new HttpHeaders({'Content-Type': 'application/json'});
     return this.httpClient.post(`${this.baseUrl}/api/login`, user, {headers : headers});
   }

}
