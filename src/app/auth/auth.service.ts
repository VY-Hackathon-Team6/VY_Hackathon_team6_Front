import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ERol } from './models/Erol';
import IUser from './models/IUser';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = ''; // Guardar en enviroments
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(user: string, password: string) {
    const login = { user: user, pass: password };
    this.http
      .post(this.uri + '/authenticate', JSON.stringify(login))
      .subscribe(
        (resp:any) => {
            sessionStorage.setItem('auth_token', resp);
            this.router.navigate(['']);
        }
      );
  }

  islogin(): boolean {
    return sessionStorage.getItem('auth_token') ? true : false;
  }

  isAdmin(): boolean {
    const user: IUser = jwt_decode(sessionStorage.getItem('auth_token')!);
    return user.rol == ERol.admin;
  }
}
