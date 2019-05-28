import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'  

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    EditFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNxYeU68llqPqbQkyzS6GsT61OG0naNqw',
      libraries: ['geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
