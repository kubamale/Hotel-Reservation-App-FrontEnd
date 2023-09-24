import { Component, Input } from '@angular/core';
import { AmenitiesModel } from 'src/shared/amenities';

@Component({
  selector: 'app-amenitie',
  templateUrl: './amenitie.component.html',
  styleUrls: ['./amenitie.component.css']
})
export class AmenitieComponent {
@Input()
  amenitie!: AmenitiesModel
}
