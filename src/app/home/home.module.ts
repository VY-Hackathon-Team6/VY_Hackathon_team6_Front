import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    InputNumberModule
  ]
})
export class HomeModule { }
