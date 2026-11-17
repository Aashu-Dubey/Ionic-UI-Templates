import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.page.html',
  styleUrls: ['./hotel-booking.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class HotelBookingPage {}
