import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { Error404Component } from './error404/error404.component';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Error404Component, LoadingComponent],
  imports: [CommonModule],
  exports: [Error404Component, LoadingComponent, ButtonModule, TableModule, InputTextModule],
})
export class SharedModule {}
