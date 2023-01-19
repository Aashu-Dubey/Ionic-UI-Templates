import { Component, OnInit } from '@angular/core';
import { Course, courseSectionsList, coursesList } from '../../models/course';

@Component({
  selector: 'cr-content-view',
  templateUrl: './content-view.page.html',
  styleUrls: ['./content-view.page.scss'],
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
