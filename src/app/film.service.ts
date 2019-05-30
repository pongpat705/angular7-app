import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Film } from './film';
import { Page } from './page';

const httpOption = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private filmsUrl = 'http://localhost:8080/moji/api/allFilms';
  private filmUrl = 'http://localhost:8080/moji/api/getFilmById';

  constructor(
    private http : HttpClient
  ) { }

  getFilms(page, size): Observable<Page>{
    return this.http.get<Page>(this.filmsUrl+'?page='+page+'&size='+size)
      .pipe(
        tap(_ => console.log('fetched filmes')),
        catchError(this.handleError('getFilms', null))
      )
  }

  getFilmById(filmId) : Observable<Film>{
    return this.http.get<Film>(this.filmUrl+'?filmId='+filmId)
      .pipe(
        tap(_ => console.log('fetched getFilmById')),
        catchError(this.handleError('getFilmById', null))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
