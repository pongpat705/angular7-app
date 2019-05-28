import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Film } from '../film';
import { FilmService } from '../film.service';

import { ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  filmList: Film[];
  hello = 'Hello moji';

  lat: number = 51.678418;
  lng: number = 7.809007;

  displayedColumns: string[] = ['title', 'description', 'releaseYear', 'symbol'];

  constructor(
    private filmService: FilmService,

    private mapsAPILoader: MapsAPILoader,

    private router: Router
  ) { }



  ngOnInit() {

    this.getFilms();

    this.mapsAPILoader.load().then(() => {
      var mapProp = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

      let locations = [
        {'name' : 'a', 'lat' : 51.679441, 'lng' : 7.792098},
        {'name' : 'b', 'lat' : 51.671085, 'lng' : 7.827072}
      ];

      //loop add marker
      for (let x in locations) {
        console.log(locations[x]);

        var locationX = new google.maps.LatLng(locations[x].lat, locations[x].lng);
        var marker = new google.maps.Marker({position: locationX, map: this.map});

        marker.addListener('click', this.clickMarker);
      }

      // const a = new google.maps.LatLng(51.679441, 7.792098);
      // const b = new google.maps.LatLng(51.671085, 7.827072);
      // const distance = google.maps.geometry.spherical.computeDistanceBetween(a, b);

      // console.log('distance :'+distance);

      // var origin1 = new google.maps.LatLng(55.930385, -3.118425);
      // var origin2 = 'Greenwich, England';
      // var destinationA = 'Stockholm, Sweden';
      // var destinationB = new google.maps.LatLng(50.087692, 14.421150);
      // var service = new google.maps.DistanceMatrixService();
      // service.getDistanceMatrix(
      //   {
      //     'origins': [origin1, origin2],
      //     'destinations': [destinationA, destinationB],
      //     'travelMode': 'DRIVING',
      //     'avoidHighways': true,
      //     'avoidTolls': true,
      //   }, this.callbackFromGoogleApi);

      }
    );

  }

  callbackFromGoogleApi(response, status) {
    console.log(status);
    console.log(response);
  }

  clickMarker(event) : void {
    console.log('marker click');
    console.log('get lat '+event.latLng.lat());
    console.log('get lng '+event.latLng.lng());
  };

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
