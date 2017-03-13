import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OnInit } from '@angular/core';
import { Schedule } from './schedule';
import { ScheduleService } from './schedule.service';

@Component({
  moduleId: module.id,
  selector: 'my-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: [ './schedules.component.css' ]
})

export class SchedulesComponent implements OnInit {
  schedules: Schedule[];
  selectedSchedule: Schedule;

  constructor(
    private router: Router,
    private scheduleService: ScheduleService) {}


  getSchedules(): void {
    this.scheduleService.getSchedules().then(schedules => this.schedules = schedules);
  }

  ngOnInit(): void {
  this.getSchedules();
  }

  onSelect(schedule: Schedule): void {
    this.selectedSchedule = schedule;
      }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSchedule.id]);
    }
}
