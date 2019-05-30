import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatTableModule, MatDatepickerModule,
  MatFormFieldModule, MatNativeDateModule,
  MatInputModule, MatPaginatorModule
} from '@angular/material'

import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { CalendarsComponent } from './calendars/calendars.component';

let materailImportedModule = [MatTableModule, MatDatepickerModule,
MatFormFieldModule, MatNativeDateModule,
MatInputModule, MatPaginatorModule];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    EditFilmComponent,
    MapsComponent,
    CalendarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9JAnt6ZMaMiDP74s0K6gWrkme9YrXWqY',
      libraries: ['geometry']
    }),
    materailImportedModule
  ],
  exports: [
    materailImportedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
