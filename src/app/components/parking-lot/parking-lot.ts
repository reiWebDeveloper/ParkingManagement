import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-lot.html',
  styleUrls: ['./parking-lot.scss']
})
export class ParkingLot implements OnInit {
  info: any[] = [];
  constructor (private data: Data) {}

  ngOnInit(): void {
    this.data.getData().subscribe({
      next: (i)=> this.info = i,
      error: (error)=> console.error('Error', error)
    })
  }

}
