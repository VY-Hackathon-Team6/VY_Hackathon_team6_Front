import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerComponent } from './pages/manager/manager.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
