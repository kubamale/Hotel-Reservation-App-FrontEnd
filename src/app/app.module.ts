import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelTabComponent } from './hotel-tab/hotel-tab.component';
import { MainTabComponent } from './main-tab/main-tab.component';
import { FilterTabComponent } from './filter-tab/filter-tab.component';
import {HttpClientModule} from '@angular/common/http';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotleCreationFormComponent } from './hotle-creation-form/hotle-creation-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelTabComponent,
    MainTabComponent,
    FilterTabComponent,
    HotelDetailsComponent,
    ImageSliderComponent,
    NavbarComponent,
    HotleCreationFormComponent,
    UserProfileComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
