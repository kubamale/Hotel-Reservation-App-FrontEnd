import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { AxiosService } from '../axios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelModel } from 'src/shared/hotel';
import { UserModel } from 'src/shared/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  usersHotels: HotelModel[] = [];
  isVisible = false;
  id!: number;
  user !: UserModel;
  addHotel:HotelModel ={
    id:1,
    country: 'US',
    description: '',
    name: 'New Hotel',
    picURL : ['assets/icons/plus-icon.png'],
    amenities: [],
    city: '',
    postalCode: '',
    street: '',
    streetNumber: '',
    email: '',
    phoneNumber: '',
    userId: 0,
    ratings:[]
  }

  constructor( private axios: AxiosService, private router: Router, private route: ActivatedRoute){}

  hotelOwnerScreen = false;
  adminScreen = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'] as number;
  });

    if (window.localStorage.getItem('user') !== undefined)  {
      this.axios.reqest('GET', '/hotels/user?id=' + this.id, {}).then(response =>{ this.usersHotels = response.data as HotelModel[]; this.usersHotels.push(this.addHotel)});
      this.axios.reqest('GET', '/users?id=' + this.id, {}).then(response => {
        this.user = response.data as UserModel;
        if(response.data.id === this.user.id as unknown as string) {
          if(window.localStorage.getItem('role') === 'ADMIN'){
            this.adminScreen = true;
          }
          else if(window.localStorage.getItem('role') === 'HOTEL_OWNER'){
            this.hotelOwnerScreen = true;
          }
        } 
        else if(window.localStorage.getItem('role') === 'ADMIN'){
          this.adminScreen = true;
        }
      } );
    } 
    else{
      this.router.navigate(['/login']);
    }
  }



  toggleVisibility(): void {
    this.isVisible =!this.isVisible;
  }

  closeForm(): void {
    this.isVisible = false;
  }

  showHotel(id: number): void {

    this.router.navigate(['/hotel-details'], {queryParams: {id: id}});
  }

  performAction(hotel: HotelModel): void{
    console.log('performAction');
    if(hotel.name === 'New Hotel'){
      this.toggleVisibility();
      console.log('toggleVisibility');
    }
    else{
      this.showHotel(hotel.id);
    }
    
  }
}
