import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { countries } from 'src/shared/country-data-store';
import { Countries } from 'src/shared/country.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() searchForAvailableHotels = new EventEmitter<{from: String, to:String}>();
  constructor(private router: Router) { }
  public cont: any = countries;
  submit(from: String, to: String) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        from: from,
        to: to
      }
    }
    console.log(navigationExtras);
    this.router.navigate(['/hotels'], navigationExtras);
  }

  navigateToUserProfile(): void{
      this.router.navigate(['/profile']);
  }
}
