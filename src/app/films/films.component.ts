import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Film } from '../film';
import { FilmService } from '../film.service';


import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList: Film[];
  hello = 'Hello moji';


  displayedColumns: string[] = ['title', 'description', 'releaseYear', 'symbol'];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(
    private filmService: FilmService,


    private router: Router
  ) { }



  ngOnInit() {

    this.getFilms();



  }



  editFilm(filmId): void {
    console.log(filmId);
    this.router.navigate(['/edit', filmId]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  getFilms(): void {
    this.filmService.getFilms()
    .subscribe(response => this.filmList = response);
  }

}
