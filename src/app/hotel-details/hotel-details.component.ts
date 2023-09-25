import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from 'src/shared/hotel';
import { HttpClient } from '@angular/common/http';
import { AxiosService } from '../axios.service';
import { FormBuilder, FormGroup, NG_ASYNC_VALIDATORS, Validators} from '@angular/forms';
import { RatingsModel } from 'src/shared/ratings';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel!: HotelModel;
  id!: number;
  isRating:boolean = false;
  ratingForm!: FormGroup;
  constructor(private route: ActivatedRoute, private http: HttpClient, private axiosService: AxiosService, private formbuilder: FormBuilder) {
    this.route.queryParams.subscribe(params => {
        this.id = params['id'] as number;
        console.log(params['id'] as string);
    });
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
    this.axiosService.reqest('GET', `/hotels/details?id=${this.id}`, {}).then(response => this.hotel = response.data as HotelModel);

    this.ratingForm = this.formbuilder.group({
      rating: ['', Validators.required],
      opinion: ['', Validators.required]
    });
  }

  toggleFormVisiblity(){
    this.isRating = !this.isRating;
  }

  addOpinion(){

    const ratingsDTO: RatingsModel = {
        rating: Number(this.ratingForm.controls['rating'].value),
        opinion: String(this.ratingForm.controls['opinion'].value),
        date: new Date(),
        hotelId: this.id,
        userId: Number(window.localStorage.getItem('user'))
    }

    console.log(window.localStorage.getItem('user') as string);
    this.axiosService.reqest('PUT', '/hotels/ratings', ratingsDTO).then(response => this.hotel.ratings.push(response as RatingsModel));
  }
}
