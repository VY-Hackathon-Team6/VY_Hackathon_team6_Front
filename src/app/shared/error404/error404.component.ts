import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {
  constructor(private router: Router){}

  GoHome() {
    this.router.navigateByUrl('/login');
  }
 }
