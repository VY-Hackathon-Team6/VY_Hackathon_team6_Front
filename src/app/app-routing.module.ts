import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './auth/guards/role.guard';
import { LoginComponent } from './auth/login/login.component';
import { ManagerComponent } from './home/pages/manager/manager.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    canActivate: [RoleGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'manager',
    component: ManagerComponent
    // Tiene que ser el admin
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
