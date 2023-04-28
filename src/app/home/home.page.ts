import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { FullName } from 'fullname';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentPositionLat: string = '';
  currentPositionLong: string = '';

  firstName: string = 'Ryan';
  lastName: string = 'Bitner';

  fullName: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.getFullName();
  }

   async getMyLocation() {
    let coords = await Geolocation.getCurrentPosition();
    this.currentPositionLat = coords.coords.latitude.toString();
    this.currentPositionLong = coords.coords.longitude.toString();
  }

 async getFullName() {
    this.fullName = await FullName.getFullName({firstName: this.firstName, lastName: this.lastName});
  }

}
