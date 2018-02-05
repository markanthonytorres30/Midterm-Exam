import { Component, Input } from '@angular/core';

import { UserService } from '../note.service';

import { User } from '../note-model';

@Component({
  selector: 'user-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class UserDetailComponent {

  @Input()
  user: User;

  constructor(private userService: UserService) { }



  deleteUser(id: string) {
    this.userService.deleteUser(id);
  }

}
