import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  isVisible = false;
  userId !: number;
  constructor(private userService: UserService, private axios: AxiosService){}

  ngOnInit(): void {
    this.userService.userLoggedInEmmiter().subscribe(data => {this.userId = data as number; console.log(data as number);});
  }



  toggleVisibility(): void {
    this.isVisible =!this.isVisible;
  }

  closeForm(): void {
    this.isVisible = false;
  }
}
