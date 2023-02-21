import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';



import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    ButtonModule
  ]
})
export class AuthModule { }
