import { Component, ViewChild } from '@angular/core';
import { MainTabComponent } from './main-tab/main-tab.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild(MainTabComponent) 
mainTab!: MainTabComponent;

  searchForAvailableHotels(from:  String, to: String) {
    console.log('Rodzic otrzymał zapytanie:', from, to);
    // Tu możesz wywołać swoją funkcję obsługującą wyszukiwanie hoteli
    this.mainTab.getAvailableHotels(from, to);
  }



}
