import { Component, OnInit } from '@angular/core';



interface Day {
  date: number;
  today: boolean;
  otherMonth: boolean;
}

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})


export class CalendrierComponent implements OnInit {

  
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  currentYear: number;
  currentMonth: number;
  weeks: Day[][];

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar();
  }
  ngOnInit(): void {

  }

  generateCalendar() {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    let date = 1;
    let currentWeek = [];

    for (let i = 0; i < 7; i++) {
      if (i < firstDayOfMonth) {
        const previousMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
        const day = { date: previousMonthDays - firstDayOfMonth + i + 1, today: false, otherMonth: true };
        currentWeek.push(day);
      } else {
        const today = new Date();
        const year = this.currentYear;
        const month = this.currentMonth;
        const day = i - firstDayOfMonth + 1;
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        const weekDay = new Date(year, month, day).getDay();
        const dayOfWeek = this.dayNames[weekDay];
        const monthName = this.monthNames[month];
        const formattedDate = `${dayOfWeek} ${day} ${monthName} ${year}`;
        const dayObject = { date: day, today: isToday, otherMonth: false, formattedDate };
        currentWeek.push(dayObject);
        date++;
      }
    }

    this.weeks = [currentWeek];

    while (date <= daysInMonth) {
      const currentWeek = [];
      for (let i = 0; i < 7 && date <= daysInMonth; i++) {
        const today = new Date();
        const year = this.currentYear;
        const month = this.currentMonth;
        const day = date;
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        const weekDay = new Date(year, month, day).getDay();
        const dayOfWeek = this.dayNames[weekDay];
        const monthName = this.monthNames[month];
        const formattedDate = `${dayOfWeek} ${day} ${monthName} ${year}`;
        const dayObject = { date: day, today: isToday, otherMonth: false, formattedDate };
        currentWeek.push(dayObject);
        date++;
      }
      this.weeks.push(currentWeek);
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }
}