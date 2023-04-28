import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentPositionLat: string = '';
  currentPositionLong: string = '';

  constructor() {}

   async getMyLocation() {
    let coords = await Geolocation.getCurrentPosition();
    this.currentPositionLat = coords.coords.latitude.toString();
    this.currentPositionLong = coords.coords.longitude.toString();
  }

}
