import { Component } from '@angular/core';

import { User }    from './user';

@Component({
  moduleId: module.id,
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html'
})
export class NewUserFormComponent {

  user = new User(1, 'Mike', 'mj@mj.com', 55555);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.user = new User(2, '', '', 333333)
  }

}
