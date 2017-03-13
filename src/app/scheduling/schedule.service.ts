import { Injectable } from '@angular/core';
import { Schedule } from './schedule';
import { SCHEDULES } from './mock-schedules';

@Injectable()
export class ScheduleService {
  getSchedules(): Promise<Schedule[]> {
      return Promise.resolve(SCHEDULES);
    }
  getSchedule(id: number): Promise<Schedule> {
  return this.getSchedules()
        .then(schedules => schedules.find(schedule => schedule.id === id));
  }
}
