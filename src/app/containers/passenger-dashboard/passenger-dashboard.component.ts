import { Component } from '@angular/core';
import { Passenger } from '../../models/passengers.interface';
import { DatePipe } from '@angular/common';
import { PassengerDetailComponent } from '../../components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from '../../components/passenger-count/passenger-count.component';

@Component({
  selector: 'app-passenger-dashboard',
  standalone: true,
  templateUrl: './passenger-dashboard.component.html',
  styleUrl: './passenger-dashboard.component.scss',
  imports: [DatePipe, PassengerDetailComponent, PassengerCountComponent],
})
export class PassengerDashboardComponent {
  passengers!: Passenger[];

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: 'Ted', age: 12 },
          { name: 'Chloe', age: 7 },
        ],
      },
    ];
    console.log(this.passengers);
  }
}
