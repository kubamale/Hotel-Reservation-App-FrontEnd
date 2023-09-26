import { Component, Input, OnInit} from '@angular/core';
import { RatingsModel } from 'src/shared/ratings';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit{
 

  @Input() opinion!: RatingsModel;
  path: string = '';
  year: string = '';


  ngOnInit(): void {
    if (this.opinion != undefined){
      this.path = `assets/icons/${this.opinion.rating}-stars.png`;
      this.year = this.formatDateToYYMMDD( new Date(this.opinion.date));
    }
  }

  formatDateToYYMMDD(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  test(){
    console.log('Testing');
  }
}
