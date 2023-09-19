import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { AxiosService } from '../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  isVisible = false;
  userId !: number;
  constructor(private userService: UserService, private axios: AxiosService, private router: Router){}

  ngOnInit(): void {
    this.userService.userLoggedInEmmiter().subscribe(data => {this.userId = data as number;});
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
}
