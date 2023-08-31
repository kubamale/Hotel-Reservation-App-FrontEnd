import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() searchForAvailableHotels = new EventEmitter<{from: String, to:String}>();
  constructor(private router: Router) { }


  submit(from: String, to: String) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: from,
        to: to
      }
    }
    console.log(navigationExtras);
    this.router.navigate([''], navigationExtras);
  }

  navigateToUserProfile(): void{
      this.router.navigate(['/profile']);
  }
}
