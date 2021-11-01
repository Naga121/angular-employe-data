import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,NgxPaginationModule],
  declarations: [AppComponent, HelloComponent, EmployeeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
