import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule';

@Component({
  moduleId: module.id,
  selector: 'my-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: [ './schedule-detail.component.css' ]
})

export class ScheduleDetailComponent implements OnInit {
  schedule: Schedule;

  constructor(
  private scheduleService: ScheduleService,
  private route: ActivatedRoute,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.scheduleService.getSchedule(+params['id']))
      .subscribe(schedule => this.schedule = schedule);
  }

  goBack(): void {
    this.location.back();
  }

}
