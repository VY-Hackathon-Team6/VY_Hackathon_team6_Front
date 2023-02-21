import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
