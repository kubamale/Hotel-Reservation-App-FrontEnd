import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from 'src/shared/hotel';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  hotels : HotelModel[] = [];
  from: String = '';
  to: String = '';
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private axiosService: AxiosService) { 
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
      querystring = `/hotels/date?startDate=${this.from}&endDate=${this.to}`;
    }
    else{
      querystring = `/hotels`;
    }
    this.axiosService.reqest('GET', querystring, {}).then(data => {this.hotels = data.data as HotelModel[]; console.log(data)}).catch(err => {});
  }

  
  chosenHotel!: HotelModel;
  isHotelSelected: boolean = false;

  getAvailableHotels(from: String, to: String) {
    this.axiosService.reqest('GET', `/hotels/date?startDate=${from}&endDate=${to}`, {}).then(data => this.hotels = data.data as HotelModel[]);
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
