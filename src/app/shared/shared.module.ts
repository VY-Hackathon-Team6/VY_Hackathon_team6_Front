import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [Error404Component],
  exports: [Error404Component, ButtonModule, InputTextModule],
})
export class SharedModule {}
