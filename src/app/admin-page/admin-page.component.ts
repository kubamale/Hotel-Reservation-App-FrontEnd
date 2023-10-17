import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/shared/user';
import { AxiosService } from '../axios.service';
import {  NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private axios: AxiosService, private roeter: Router){}

  ngOnInit(): void {
    this.axios.reqest('GET', '/users/admin', {}).then(response => this.users = response.data as UserModel[]);
  }


  showProfile(id: number){
    console.log('navigate to profile ' + id);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id
      }
    }
    this.roeter.navigate(['/profile'],navigationExtras);
  }

}
