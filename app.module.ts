import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { appRoutes} from './routerConfig';
import { SqrtPipe } from './components/pipes.component';
import { EventsComponent } from './events/events.component';
import { HelloservService } from './helloserv.service';
import { EmployeesService } from './employees.service';
import { EmployeesList } from './employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Array1Component } from './array1/array1.component';
import { Forms1Component } from './forms1/forms1.component';
import { ObsevablesComponent } from './obsevables/obsevables.component';
import { BindingComponent } from './binding/binding.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    SqrtPipe,
    EventsComponent,
    EmployeesList,
    Array1Component,
    Forms1Component,
    ObsevablesComponent,
    BindingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )  
  ],
  providers: [HelloservService,EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
