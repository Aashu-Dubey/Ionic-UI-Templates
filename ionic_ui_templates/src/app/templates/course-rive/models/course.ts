export interface Course {
  title: string;
  subtitle?: string;
  caption: string;
  color: string;
  image: string;
}

export const coursesList: Course[] = [
  {
    title: 'Animations in SwiftUI',
    subtitle: 'Build and animate an iOS app from scratch',
    caption: '20 sections - 3 hours',
    color: '120, 80, 240',
    image: 'assets/course_rive/topic_1.svg',
  },
  {
    title: 'Build Quick Apps with SwiftUI',
    subtitle:
      'Apply your Swift and SwiftUI knowledge by building real, quick and various applications from scratch',
    caption: '47 sections - 11 hours',
    color: '103, 146, 255',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Build a SwiftUI app for iOS 15',
    subtitle:
      'Design and code a SwiftUI 3 app with custom layouts, animations and gestures using Xcode 13, SF Symbols 3, Canvas, Concurrency, Searchable and a whole lot more',
    caption: '21 sections - 4 hours',
    color: '0, 95, 231',
    image: 'assets/course_rive/topic_1.svg',
  },
];

export const courseSectionsList: Course[] = [
  {
    title: 'State Machine',
    caption: 'Watch video - 15 mins',
    color: '#9CC5FF',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Animated Menu',
    caption: 'Watch video - 10 mins',
    color: '#6E6AE8',
    image: 'assets/course_rive/topic_1.svg',
  },
  {
    title: 'Tab Bar',
    caption: 'Watch video - 8 mins',
    color: '#005FE7',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Button',
    caption: 'Watch video - 9 mins',
    color: '#BBA6FF',
    image: 'assets/course_rive/topic_1.svg',
  },
];
