import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingLot } from "./components/parking-lot/parking-lot";

@Component({
  selector: 'app-root',
  imports: [ ParkingLot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ParkingManagement');
}
