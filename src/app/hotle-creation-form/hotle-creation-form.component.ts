import { Component } from '@angular/core';
import { HotelModel } from 'src/shared/hotel';

@Component({
  selector: 'app-hotle-creation-form',
  templateUrl: './hotle-creation-form.component.html',
  styleUrls: ['./hotle-creation-form.component.css']
})
export class HotleCreationFormComponent {

  hotel!: HotelModel;

  submit(): void {

  }

}
