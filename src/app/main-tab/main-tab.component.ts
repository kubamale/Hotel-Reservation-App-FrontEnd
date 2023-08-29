import { Component, OnInit} from '@angular/core';
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

  
  chosenHotel!: HotelModel;
  isHotelSelected: boolean = false;

  getAvailableHotels(from: String, to: String) {
    this.http.get('http://localhost:8080/hotels/date?startDate=' + from + '&endDate=' + to).subscribe(data => {
      this.hotels = data as HotelModel[];
      console.log(this.hotels);
    });
    console.log(this.hotels);
  }

  click(hotel: HotelModel){
    console.log("click");
    this.chosenHotel = hotel;
    this.isHotelSelected = true;
    
  }

}
