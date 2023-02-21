import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ERol } from './models/Erol';
import IUser from './models/IUser';
import jwt_decode from 'jwt-decode';
import { Ejwt } from './models/Ejwt';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'https://pastebin.com/raw/fsHqkVfb'; // Guardar en enviroments
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(user: string, password: string) {
    const login = { user: user, pass: password };
    this.http
      .post(this.uri, JSON.stringify(login))
      .subscribe(
        (resp:any) => {
          console.log(resp[0].accessToken);
            localStorage.setItem('auth_token', resp[0].accessToken);
            this.router.navigate(['home']);
        }
      );
  }

  islogin(): boolean {
    return localStorage.getItem('auth_token') ? true : false;
  }

  isAdmin(): boolean {
    const user: any = jwt_decode(localStorage.getItem('auth_token')!)
    return user[Ejwt.role] == ERol.admin;
  }
}
