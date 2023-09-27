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
  rating: string = '';
  stars: number[] = [1,2,3,4,5];
  selectedStars: number = 1;
  temporaryStar: number = 1;
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
    this.axiosService.reqest('GET', `/hotels/details?id=${this.id}`, {}).then(response => {
      this.hotel = response.data as HotelModel; 
      this.rating = this.calculateRatings((response.data as HotelModel).ratings);
    });


    this.ratingForm = this.formbuilder.group({
      opinion: ['', Validators.required]
    });

  }

  toggleFormVisiblity(){
    this.isRating = !this.isRating;
  }

  addOpinion(){
    if (this.ratingForm.valid && this.selectedStars > 0 && this.selectedStars <= 5){
      this.isRating = false;
      const ratingsDTO: RatingsModel = {
          rating: this.selectedStars,
          opinion: String(this.ratingForm.controls['opinion'].value),
          date: new Date(),
          hotelId: this.id,
          userId: Number(window.localStorage.getItem('user'))
      }
      this.axiosService.reqest('PUT', '/hotels/ratings', ratingsDTO).then(response => {
        let temp: RatingsModel[] = this.hotel.ratings;
        temp.push(response.data as RatingsModel);
        this.hotel.ratings = temp as RatingsModel[];
        this.rating = this.calculateRatings(temp);
      });
    }
   
  }

  cancel(){
    this.isRating = false;
  }
  over(index: number){
    if (this.temporaryStar == this.selectedStars){
      this.temporaryStar = this.selectedStars;
    }
    this.selectedStars= index +1;
  }

  leave(){
    this.selectedStars = this.temporaryStar;
  }

  setStars(index: number){
      this.selectedStars = index + 1;
      this.temporaryStar = index + 1;
  }

  calculateRatings(ratings: RatingsModel[]): string {
    let result: number = 0;
    for (let rating of ratings){
      result += rating.rating;
    }

    return (result/ratings.length).toFixed(2);
  }
}
