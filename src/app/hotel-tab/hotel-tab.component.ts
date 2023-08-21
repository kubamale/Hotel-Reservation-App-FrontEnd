import { Component, Input, OnInit} from '@angular/core';
import { HotelModel } from 'src/shared/hotel';


@Component({
  selector: 'app-hotel-tab',
  templateUrl: './hotel-tab.component.html',
  styleUrls: ['./hotel-tab.component.css']
})
export class HotelTabComponent{
  @Input()
  hotel!: HotelModel;
  
}
