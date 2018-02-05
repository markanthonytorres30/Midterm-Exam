import { Component, OnInit } from '@angular/core';

import { UserService } from '../note.service';

import { User } from '../note-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class UserListComponent implements OnInit {

  notes: Observable<User[]>;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  something: string;


  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getData()
    this.user = this.userService.getSnapshot();
  }

  createUser() {
    this.userService.create(this.content,this.firstName,this.lastName,this.email,this.address,this.phone,this.something);
    this.company = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.address ='';
    this.phone = '';
    this.something = '';
  }

}
