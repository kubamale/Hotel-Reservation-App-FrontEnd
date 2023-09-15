import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoggedInEmitter = new EventEmitter<Boolean>();
  constructor() { }

  userLoggedIn(): void {
    this.userLoggedInEmitter.emit(true);
  }

  userLoggedInEmmiter(){
    return this.userLoggedInEmitter;
  }
}
