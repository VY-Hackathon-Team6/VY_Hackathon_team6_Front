import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';

import { FileSaverModule } from 'ngx-filesaver';

import { Error404Component } from './error404/error404.component';
import { LoadingComponent } from './loading/loading.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [Error404Component, LoadingComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [
    Error404Component,
    LoadingComponent,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    FileSaverModule,
    InputTextModule,
    ProgressBarModule,
    HeaderComponent,
    InputNumberModule
  ]
})
export class SharedModule {}
