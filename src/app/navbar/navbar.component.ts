import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { countries } from 'src/shared/country-data-store';
import { Countries } from 'src/shared/country.model';
import { AxiosService } from '../axios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userIsLoggedIn = window.localStorage.getItem('auth_token') !== null;

  @Output() searchForAvailableHotels = new EventEmitter<{from: String, to:String}>();
  constructor(private router: Router, private axiosService: AxiosService) { }
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

  navigateTo(page: string): void{
      this.router.navigate([page]);
  }

  logout(): void{
    this.axiosService.reqest('GET', '/logout', {}).then(response => console.log(response));
  }

  
}
