import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataArray$: Subject<Data[]> = new Subject()

  constructor(private http: HttpClient) {}


  getData(): void {
    this.dataArray$.next([])
    this.http.get<Data[]>(environment.URL_API_DATA).subscribe(array => this.dataArray$.next(array));
  }

  getDataArray(): Observable<Data[]> {
    this.getData()
    return this.dataArray$.asObservable()
  }
}
