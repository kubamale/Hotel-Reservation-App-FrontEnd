import { Component, OnInit , inject, Input} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HotelModel } from 'src/shared/hotel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AxiosService } from '../axios.service';
import { AmenitiesModel } from 'src/shared/amenities';

@Component({
  selector: 'app-hotle-creation-form',
  templateUrl: './hotle-creation-form.component.html',
  styleUrls: ['./hotle-creation-form.component.css'],
})
export class HotleCreationFormComponent implements OnInit {
  @Output() showHotelEvent = new EventEmitter<number>();
  @Output() newItemEvent = new EventEmitter();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  picURL: string[] = [];
  hotelForm!: FormGroup;
  announcer = inject(LiveAnnouncer);
  amenities: AmenitiesModel[] = [];

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private _snackBar: MatSnackBar, private router:Router, private axois: AxiosService) { }

  ngOnInit(): void {
    this.axois.reqest('GET', '/hotels/amenities', {}).then(response => {this.amenities = response.data as AmenitiesModel[]});

    this.hotelForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      description: ['', Validators.required],
      amenities: ['']
    });
  }

  hotel!: HotelModel ;

  submit(): void {
    console.log(this.hotelForm.value);
    if (this.hotelForm.valid) {
      const newHotel: HotelModel = this.hotelForm.value;
      newHotel.userId = Number(window.localStorage.getItem('user'));
      newHotel.picURL = this.picURL;
      //newHotel.amenities = this.amenities;
      this.axois.reqest('POST', '/hotels', newHotel).then((response) => {
        const hotelId = Number(response.data.Id);
        this.showHotelEvent.emit(hotelId);
        this.closeForm();
        this.openSnackBar('Hotel added successfully','CLOSE' );
      });
      
    }
    else{
      console.log('error');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
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
    this.newItemEvent.emit();
    this.hotelForm.reset();
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
}
