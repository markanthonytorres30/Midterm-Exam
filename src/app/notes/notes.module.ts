import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { UserService } from './note.service';

import { UserListComponent } from './notes-list/notes-list.component';
import { UserDetailComponent } from './note-detail/note-detail.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
  ],
  providers: [UserService],
})
export class UserModule { }
