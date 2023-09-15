import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { countries } from 'src/shared/country-data-store';
import { Countries } from 'src/shared/country.model';
import { AxiosService } from '../axios.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  isUserLoggedIn: Boolean = false;

  @Output() searchForAvailableHotels = new EventEmitter<{from: String, to:String}>();
  constructor(private router: Router, private axiosService: AxiosService, private userService: UserService) { }
  ngOnInit(): void {
    if (window.localStorage.getItem('auth_token') !== null) {
      this.isUserLoggedIn = true;
    }
   this.userService.userLoggedInEmmiter().subscribe(data => this.isUserLoggedIn = data);
  }
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
    window.localStorage.removeItem('auth_token');
    this.isUserLoggedIn = false;
  }

  
}
