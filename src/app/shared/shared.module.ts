import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [Error404Component],
  imports: [CommonModule],
  exports: [Error404Component, ButtonModule, InputTextModule],
})
export class SharedModule {}
