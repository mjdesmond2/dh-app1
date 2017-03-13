import { Component, OnInit } from '@angular/core';

import { Schedule } from './schedule';
import { ScheduleService } from './schedule.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getSchedules()
      .then(schedules => this.schedules = schedules.slice(1, 5));
  }
}
