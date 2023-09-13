import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from 'src/shared/hotel';
import { HttpClient } from '@angular/common/http';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel!: HotelModel;
  id!: number;
  constructor(private route: ActivatedRoute, private http: HttpClient, private axiosService: AxiosService) {
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    });
  }
  ngOnInit(): void {
    this.axiosService.reqest('GET', `/hotels/details?id=${this.id}`, {}).then(response => this.hotel = response.data as HotelModel);
  }
}
