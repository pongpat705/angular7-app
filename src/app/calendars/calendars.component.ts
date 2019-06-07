import { Component, OnInit } from '@angular/core';

import { FilmService } from '../film.service';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css']
})
export class CalendarsComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  mydate : Date;

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.downloadPDF();
  }


}
