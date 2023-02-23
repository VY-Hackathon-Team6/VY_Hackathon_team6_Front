import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) {}
  logout() {
    localStorage.clear();
    //this.router.navigate(['login']);
  }

  get IsLogin(): boolean {
    return this.auth.islogin();
  }
}
