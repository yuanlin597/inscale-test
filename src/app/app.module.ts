import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEmployeesComponent } from './app-employees/app-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AppEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
