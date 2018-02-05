import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from './note-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewUser {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  something: string;
}

@Injectable()
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  userDocument:   AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('user', (ref) => ref.orderBy('lastName', 'desc').limit(5));
  }

  getData(): Observable<User[]> {
    return this.userCollection.valueChanges();
  }

  getSnapshot(): Observable<User[]> {
    // ['added', 'modified', 'removed']
    return this.userCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as User;
        return { id: a.payload.doc.id, company: data.company, firstName: data.firstName, lastName: data.lastName, email: data.email, address: data.address, phone: data.phone, something: data.something };
      });
    });
  }

  getNote(id: string) {
    return this.afs.doc<User>(`notes/${id}`);
  }

  create(content: string) {
    const user = {
     company,
     firstName,
     lastName,
     email,
     address,
     phone,something
    };
    return this.userCollection.add(user);
  }

  updateUser(id: string, data: Partial<User>) {
    return this.getUser(id).update(data);
  }

  deleteUser(id: string) {
    return this.getUser(id).delete();
  }
}
