import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ManagerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
