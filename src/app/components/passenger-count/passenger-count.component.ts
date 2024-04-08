import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passengers.interface';

@Component({
  selector: 'app-passenger-count',
  standalone: true,
  imports: [],
  templateUrl: './passenger-count.component.html',
  styleUrl: './passenger-count.component.scss',
})
export class PassengerCountComponent {
  @Input() items!: Passenger[];
  checkedInCount(): number {
    if (!this.items) return 0;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn)
      .length;
  }
}
