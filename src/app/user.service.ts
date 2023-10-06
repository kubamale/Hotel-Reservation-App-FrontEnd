import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoggedInStatusEmitter = new EventEmitter<boolean>();
  constructor() { }

  userLoggedIn(): void {
    this.userLoggedInStatusEmitter.emit(true);
  }

  userLoggedOut(): void {
    this.userLoggedInStatusEmitter.emit(false);
  }

  userLoggedInEmmiter(){
    return this.userLoggedInStatusEmitter;
  }
}
