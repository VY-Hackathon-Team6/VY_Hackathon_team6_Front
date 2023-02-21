import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from './auth/guard/role-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivateChild: [RoleGuardGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '404',
    component: Error404Component
  },
  {path: '**', redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
