import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { SchedulesComponent }     from './schedules.component';
import { ScheduleService }         from './schedule.service';
import { DashboardComponent }   from './dashboard.component';
import { NewUserFormComponent } from './login/new-user-form.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleDetailComponent,
    SchedulesComponent,
    NewUserFormComponent
  ],
  providers: [ ScheduleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
