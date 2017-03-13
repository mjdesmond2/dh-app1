import { Component } from '@angular/core';

@Component({
moduleId: module.id,
selector: 'app-root',
styleUrls: ['./app.component.css'],
template:
`

<new-user-form></new-user-form>

<h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/schedules" routerLinkActive="active">Schedules</a>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
 title = 'Dankhouse';
}
