import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

 private state = new BehaviorSubject<User>({login: '', password: ''});

  constructor() { }

  createUser(user): void {
    this.state.next(user);
  }


  getUser(): User {
    return this.state.getValue();
  }
}
