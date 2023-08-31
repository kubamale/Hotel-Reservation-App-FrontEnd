import { Component, ViewChild } from '@angular/core';
import { MainTabComponent } from './main-tab/main-tab.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild(MainTabComponent) 
mainTab!: MainTabComponent;

  constructor(private router: Router){  
  }

  searchForAvailableHotels(from:  String, to: String) {
    console.log('Rodzic otrzymał zapytanie:', from, to);
    // Tu możesz wywołać swoją funkcję obsługującą wyszukiwanie hoteli
    this.mainTab.getAvailableHotels(from, to);
  }

  isVisible = false;

  toggleVisibility() {
    this.isVisible =!this.isVisible;
  }


}
