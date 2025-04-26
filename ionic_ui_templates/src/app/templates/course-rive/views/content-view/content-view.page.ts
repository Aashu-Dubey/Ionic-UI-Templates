import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { Course, courseSectionsList, coursesList } from '../../models/course';
import { ShuffleArrayPipe } from '../../helper/shuffle-array/shuffle-array.pipe';

@Component({
  selector: 'cr-content-view',
  templateUrl: './content-view.page.html',
  styleUrls: ['./content-view.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
    ShuffleArrayPipe,
  ],
})
export class ContentViewPage implements OnInit {
  courses = coursesList;
  courseSections = courseSectionsList;

  constructor() {}

  ngOnInit() {}

  trackCourses(i: number, course: Course) {
    return `${course.title}_${i}`;
  }

  trackAvatarItems(_i: number, num: number) {
    return `avatar_${num}`;
  }
}
