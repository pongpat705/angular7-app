import { Component, OnInit, ViewChild, NgZone }from '@angular/core';

import {} from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  lat: number = 51.678418;
  lng: number = 7.809007;

  totalDistance : string = '';

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private zone: NgZone
  ) { }

  ngOnInit() {
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

        var marker = new google.maps.Marker({position: locationX, map: this.map, draggable:true});
        marker.addListener('click', this.clickMarker);
        
      }

      const a = new google.maps.LatLng(51.679441, 7.792098);
      const b = new google.maps.LatLng(51.671085, 7.827072);
      const distance = google.maps.geometry.spherical.computeDistanceBetween(a, b);

      console.log('distance :'+distance);


      var service = new google.maps.DistanceMatrixService();
      let drivingMode = google.maps.TravelMode['DRIVING'];
      service.getDistanceMatrix(
        {
          'origins': [a],
          'destinations': [b],
          'travelMode': drivingMode,
          'avoidHighways': true,
          'avoidTolls': true,
        }, (response, status) => this.zone.run(()=>{
          console.log(response);
          let totalDistance = response.rows[0].elements[0].distance.text;
          this.totalDistance = totalDistance;
        }));

      }
    );

  }

  test() : void{
    console.log(this.totalDistance);

  };

  clickMarker(event) : void {
    console.log('marker click');
    console.log('get lat '+event.latLng.lat());
    console.log('get lng '+event.latLng.lng());
  };

}
