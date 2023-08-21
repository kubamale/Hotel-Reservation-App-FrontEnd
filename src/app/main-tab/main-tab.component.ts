import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from 'src/shared/hotel';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  hotels : HotelModel[] = []; 
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('http://localhost:8080/hotels').subscribe(data => {
      this.hotels = data as HotelModel[];
      console.log(this.hotels);
    });
  }

}
