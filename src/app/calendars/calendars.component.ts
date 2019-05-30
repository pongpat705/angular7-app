import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css']
})
export class CalendarsComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  mydate : Date;

  constructor() { }

  ngOnInit() {
  }

}
