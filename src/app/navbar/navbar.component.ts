import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() searchForAvailableHotels = new EventEmitter<{from: String, to:String}>();



  submit(from: String, to: String) {
    console.log(from, to);
      this.searchForAvailableHotels.emit({from, to});
  }
}
