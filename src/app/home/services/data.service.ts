import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // user/login <- login
  // /api/inputWorkers <-
  private dataArray$: Subject<Data[]> = new Subject()
  url = "/api/InputWorkers"
  constructor(private http:HttpClient) {}

  getData(): void {
    this.dataArray$.next([])
    this.http.get<Data[]>(`${environment.URL_API_DATA}/realData`).pipe(
      map(array => array.map(data => {
        data.hour = Number(data.hour)
        data.day = data.day.split('T')[0]
        return data
      }))
    ).subscribe(array => this.dataArray$.next(array));
  }

  getDataArray(): Observable<Data[]> {
    this.getData()
    return this.dataArray$.asObservable()
  }

  sendData(data:any){
    this.http.post(`${this.url}`, data);
  }
}
