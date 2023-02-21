import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // user/login <- login
  // /api/inputWorkers <-
  url = "/api/InputWorkers"
  constructor(private http:HttpClient) {}

  sendData(data:any){
    this.http.post(`${this.url}`, data);
  }
}
