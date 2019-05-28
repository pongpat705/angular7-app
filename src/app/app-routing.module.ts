import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
const routes: Routes = [
  {
      path: 'films',
      component: FilmsComponent
  },
  {
      path: 'edit/:filmId',
      component: EditFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
