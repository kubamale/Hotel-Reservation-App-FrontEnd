import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from 'src/shared/hotel';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  hotels : HotelModel[] = [];
  from: String = '';
  to: String = '';
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { 
    this.route.queryParams.subscribe(params => {
        if(params['from']!= null && params['to']!= null){
          this.from = params['from'];
          this.to = params['to'];
        }
    });
  }

  ngOnInit(): void {
    let querystring : string;

    if(this.from && this.to){
      querystring = `http://localhost:8080/hotels/date?startDate=${this.from}&endDate=${this.to}`;
    }
    else{
      querystring = `http://localhost:8080/hotels`;
    }

    this.http.get(querystring).subscribe(data => {
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

  showHotelDetails(id: number){
    let naviationExtras: NavigationExtras = {
      queryParams:{
        id: id
      }
    }
    this.router.navigate(['/hotel-details'], naviationExtras);
  }

}
