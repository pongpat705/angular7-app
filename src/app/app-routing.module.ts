import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { MapsComponent } from './maps/maps.component';
import { CalendarsComponent } from './calendars/calendars.component';
const routes: Routes = [
  {
      path: 'films',
      component: FilmsComponent
  },
  {
      path: 'edit/:filmId',
      component: EditFilmComponent
  },
  {
      path: 'map',
      component: MapsComponent
  },
  {
      path: 'calendar',
      component: CalendarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
