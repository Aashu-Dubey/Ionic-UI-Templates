import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/angular';
import { courseSectionsList, coursesList } from '../../models/course';
import { ShuffleArrayPipe } from '../../helper/shuffle-array/shuffle-array.pipe';

@Component({
  selector: 'cr-content-view',
  templateUrl: './content-view.page.html',
  styleUrls: ['./content-view.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
    ShuffleArrayPipe,
  ],
})
export class ContentViewPage {
  courses = coursesList;
  courseSections = courseSectionsList;
}
