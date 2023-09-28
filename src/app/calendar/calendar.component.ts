import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  implements OnInit{
  daysToDisplay: number[] = [];
  curentDate: Date = new Date();
  weeksToDisplay!: number;
  startIndex!: number;
  weeksRows: number[] = [];
  startDay!: number;
  curentMonth!: string;
  curentYear!: string;
  daysOfWeekMap: Map<string, number> = new Map([
    ["Monday", 1],
    ["Tuesday", 2],
    ["Wednesday", 3],
    ["Thursday", 4],
    ["Friday", 5],
    ["Saturday", 6],
    ["Sunday", 7]
  ]);

  ngOnInit(): void {
    this.setCallendar(this.curentDate);
  }

  prevMonth(): void {
    this.curentDate.setMonth(this.curentDate.getMonth() - 1);
    this.setCallendar(this.curentDate);
  }

  nextMonth(): void {
    this.curentDate.setMonth(this.curentDate.getMonth() + 1);
    this.setCallendar(this.curentDate);
  }

  setCallendar(date: Date): void {
    let daysToadd = this.daysOfWeekMap.get(this.getFirstDayOfMonthWithDayOfWeek(date));
    
    if (daysToadd !== undefined) {
      this.startDay = daysToadd;
      this.weeksToDisplay = ((this.getDaysInMonth(date.getFullYear(), date.getMonth()) + daysToadd -1)/7);
    }

    console.log(this.weeksToDisplay);
    this.setRows(this.weeksToDisplay);

    this.setDaysToDisplay(date);
    console.log(this.daysToDisplay);
    this.curentMonth = date.toLocaleString('default', {'month' : 'long'});
    this.curentYear = date.toLocaleString('default', {'year' : 'numeric'});
  }

  setRows(rows: number): void {
    this.weeksRows = [];
    for (let i = 0; i < rows; i++) {
      this.weeksRows.push(i);
    }

    
  }

  getFirstDayOfMonthWithDayOfWeek(date: Date): string {
    // Clone the input date to avoid modifying it
    const firstDay = new Date(date);
    
    // Set the day of the month to 1
    firstDay.setDate(1);
  
    // Define an array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Get the day of the week for the first day of the month and return it
    const dayOfWeek = weekdays[firstDay.getDay()];
    
    return dayOfWeek;
  }

  getDaysInMonth(year: number, month: number): number {
    // Create a new Date object for the specified year and month
    // Note: JavaScript months are 0-based, so January is 0, February is 1, and so on
    const date = new Date(year, month, 1);
  
    // Move to the next month and subtract one day to get the last day of the specified month
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
  
    // Get the day of the month, which gives the number of days in the month
    return date.getDate();
  }

  setDaysToDisplay(date: Date): void {
    let res: number[] = [];

    let diff = this.startDay-2;
    let prev = this.getDaysInMonth(date.getFullYear(), date.getMonth() -1);
    let now = this.getDaysInMonth(date.getFullYear(), date.getMonth());
    let nowIndex = 1;
    console.log(prev);
    for (let i = 0; i < Math.ceil(this.weeksToDisplay)*7; i++) {
      if (i < this.startDay -1){
        res.push(prev - diff);
        diff--;
      }
      else if( i < this.startDay + now -1){
        res.push(nowIndex);
        nowIndex++;
      }
      else{
        res.push(i-this.startDay - now +2);
      }
    }

    this.daysToDisplay = res;
  }
}
