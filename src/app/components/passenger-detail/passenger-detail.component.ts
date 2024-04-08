import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passengers.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-passenger-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './passenger-detail.component.html',
  styleUrl: './passenger-detail.component.scss',
})
export class PassengerDetailComponent {
  @Input() detail!: Passenger;
}
