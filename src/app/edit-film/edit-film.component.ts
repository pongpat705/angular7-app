import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

 film: Film;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('filmId');
    console.log(id);
    this.getFilm(id);
  }

  getFilm(filmId): void {
    this.filmService.getFilmById(filmId)
    .subscribe(response => this.film = response);
  }

  updateFilm(film : Film) : void {
    console.log(film);
  }

}
