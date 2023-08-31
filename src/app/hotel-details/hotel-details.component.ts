import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from 'src/shared/hotel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel!: HotelModel;
  id!: number;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
    });
  }
  ngOnInit(): void {
    this.http.get<HotelModel>(`http://localhost:8080/hotels/details?id=${this.id}`).subscribe(data => {
      this.hotel = data;
    });
  }
}
