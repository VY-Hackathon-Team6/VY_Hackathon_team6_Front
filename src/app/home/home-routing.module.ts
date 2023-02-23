import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../auth/guards/role.guard';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerComponent } from './pages/manager/manager.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'management', component: ManagerComponent, canActivate: [RoleGuard] },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
