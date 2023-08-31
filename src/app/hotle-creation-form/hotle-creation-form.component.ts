import { Component, OnInit , inject} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HotelModel } from 'src/shared/hotel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotle-creation-form',
  templateUrl: './hotle-creation-form.component.html',
  styleUrls: ['./hotle-creation-form.component.css'],
})
export class HotleCreationFormComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  amenities: string[] = [];
  picURL: string[] = [];
  hotelForm!: FormGroup;
  announcer = inject(LiveAnnouncer);

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.hotelForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  hotel!: HotelModel ;

  submit(): void {
    if (this.hotelForm.valid) {
      const newHotel: HotelModel = this.hotelForm.value;
      newHotel.picURL = this.picURL;
      newHotel.amenities = this.amenities;
      console.log(newHotel);
      this.http.post<HotelModel>('http://localhost:8080/hotels', newHotel).subscribe(res =>{
        const hotel: HotelModel = res;
      });
    }
  }


  addPic(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.picURL.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  closeForm(): void {
    
  }

  removePic(pic: string): void {
    const index = this.picURL.indexOf(pic);

    if (index >= 0) {
      this.picURL.splice(index, 1);

      this.announcer.announce(`Removed ${pic}`);
    }
  }

  editPic(pic: string, event: MatChipEditedEvent): void {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.removePic(pic);
      return;
    }

    // Edit existing fruit
    const index = this.picURL.indexOf(pic);
    if (index >= 0) {
      this.picURL[index] = value;
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.amenities.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(amenitie: string): void {
    const index = this.amenities.indexOf(amenitie);

    if (index >= 0) {
      this.amenities.splice(index, 1);

      this.announcer.announce(`Removed ${amenitie}`);
    }
  }

  edit(amenitie: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(amenitie);
      return;
    }

    // Edit existing fruit
    const index = this.amenities.indexOf(amenitie);
    if (index >= 0) {
      this.amenities[index] = value;
    }
  }
}
