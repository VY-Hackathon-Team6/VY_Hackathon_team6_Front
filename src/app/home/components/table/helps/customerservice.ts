import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<Customer[]>(`${environment.URL_API_DATA}/data`)
    }
}