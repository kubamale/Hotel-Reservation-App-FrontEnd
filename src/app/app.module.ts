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




@NgModule({
  declarations: [
    AppComponent,
    HotelTabComponent,
    MainTabComponent,
    FilterTabComponent,
    HotelDetailsComponent,
    ImageSliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
