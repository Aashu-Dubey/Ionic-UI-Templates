import { Component } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/angular';

import { ShuffleArrayPipe } from '../../helper/shuffle-array/shuffle-array.pipe';
import { courseSectionsList, coursesList } from '../../models/course';

@Component({
  selector: 'cr-content-view',
  templateUrl: './content-view.page.html',
  styleUrls: ['./content-view.page.scss'],
  imports: [
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    ShuffleArrayPipe,
  ],
})
export class ContentViewPage {
  courses = coursesList;
  courseSections = courseSectionsList;
}
