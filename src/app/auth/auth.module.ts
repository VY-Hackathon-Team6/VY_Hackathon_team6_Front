import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
