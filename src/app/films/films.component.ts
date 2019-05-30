import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Film } from '../film';
import { Page } from '../page';
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
  page : Page;
  hello = 'Hello moji';


  displayedColumns: string[] = ['title', 'description', 'releaseYear', 'symbol'];

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(
    private filmService: FilmService,
    private router: Router
  ) {

    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = this.pageSize;
    this.pageEvent.length = this.length;

   }

  ngOnInit() {
    this.getFilms(this.pageEvent);
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

  transformPage( response : Page) : void {
    console.log(this.pageEvent);
    this.page = response;
    this.pageEvent.length = this.page.totalElements;
    this.length = this.page.totalElements;
  }

  pageChange(e : PageEvent) : PageEvent {
    console.log(e);
    this.getFilms(e);
    return e;
  }

  getFilms(pageEvent : PageEvent): void {
    // if(this.pageEvent){
      console.log("getFilm page "+pageEvent.pageIndex+" size "+pageEvent.pageSize);
      this.filmService.getFilms(pageEvent.pageIndex, pageEvent.pageSize)
      .subscribe(response => this.transformPage(response));
    // }
  }

}
