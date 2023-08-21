import { Component, Input } from '@angular/core';
import { HotelModel } from 'src/shared/hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  @Input()
  hotel!: HotelModel;
}
