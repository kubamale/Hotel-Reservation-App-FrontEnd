import { Component, Input } from '@angular/core';
import { HotelModel } from 'src/shared/hotel';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input()
  imgCollection!: String[];

  @Input()
  hotel!: HotelModel;

  maxPicAmount = 5;
  index = 0;
  indexesToDisplay:number[] = [0,1,2,3,4];

  nextSlide(){
    if(this.index  < this.hotel.picURL.length - 1){
      this.index++;
      if(this.index >= this.maxPicAmount){
        this.indexesToDisplay = this.indexesToDisplay.map(i => i + 1);
      }
    }
  }

  priviousSlide(){
    if(this.index  > 0){
      if(this.index <= this.hotel.picURL.length- this.maxPicAmount){
        this.indexesToDisplay = this.indexesToDisplay.map(i => i - 1);
        if(this.indexesToDisplay[0] < 0)
        this.indexesToDisplay =  [0,1,2,3,4];
        console.log('ble');
      }
      this.index--;
      
    }
  }

  changeImage(i: number){
    this.index = i;
  }

}
