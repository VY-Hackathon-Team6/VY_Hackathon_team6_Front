import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService){

  }
  router: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean>
    | Promise<boolean>
    | boolean
    | UrlTree {
    if (!this.authService.isAdmin()) {
      return this.router.navigate(['dashboard']).then(() => false);
    }
    return true;
  }
}
