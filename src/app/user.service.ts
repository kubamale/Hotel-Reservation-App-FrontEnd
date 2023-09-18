import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoggedInEmitter = new EventEmitter<number>();
  constructor() { }

  userLoggedIn(id: number): void {
    this.userLoggedInEmitter.emit(id);
  }

  userLoggedInEmmiter(){
    return this.userLoggedInEmitter;
  }
}
