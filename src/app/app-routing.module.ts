import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { MainTabComponent } from './main-tab/main-tab.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  
  {path: 'hotel-details', component: HotelDetailsComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: '', component: MainTabComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
