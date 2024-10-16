export interface Course {
  title: string;
  subtitle?: string;
  caption: string;
  color: string;
  image: string;
}

export const coursesList: Course[] = [
  {
    title: 'Inscription',
    subtitle: 'Créez votre compte et associez vos réseaux sociaux',
    caption: '5 sections - 30 minutes',
    color: '120, 80, 240',
    image: 'assets/course_rive/topic_1.svg',
  },
  {
    title: 'Comprendre le Score',
    subtitle: 'Découvrez comment fonctionne le système de score évolutif',
    caption: '10 sections - 1 heure',
    color: '103, 146, 255',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Utiliser le Cashback',
    subtitle: 'Maximisez vos gains avec notre système de cashback',
    caption: '8 sections - 45 minutes',
    color: '0, 95, 231',
    image: 'assets/course_rive/topic_1.svg',
  },
];

export const courseSectionsList: Course[] = [
  {
    title: 'Votre Score',
    caption: 'Visualisez votre score et découvrez comment il est calculé',
    color: '#9CC5FF',
    image: 'assets/course_rive/png/score.png',
  },
  {
    title: 'Parrainage',
    caption: 'Partagez votre code de parrainage et gagnez des points',
    color: '#6E6AE8',
    image: 'assets/course_rive/png/man.png',
  },
  {
    title: 'Filtrage des Publications',
    caption: 'Filtre les publications malveillantes',
    color: '#005FE7',
    image: 'assets/course_rive/png/filter.png',
  },
  {
    title: 'Cashback',
    caption: 'Gagnez du cashback ! Plus votre score est élevé, plus vous bénéficiez de cashback intéressants',
    color: '#BBA6FF',
    image: 'assets/course_rive/png/cashback.png',
  },
  {
    title: 'Événements',
    caption: 'Regardez la vidéo - 15 minutes',
    color: '#9CC5FF',
    image: 'assets/course_rive/png/banner.png',
  },
  {
    title: 'Signalements',
    caption: 'Retourvez les signalements que vous avez effectués',
    color: '#6E6AE8',
    image: 'assets/course_rive/png/alarm.png',
  },
  {
    title: 'Télécharger l\'Application',
    caption: 'Notre application mobile est disponible sur iOS et Android !',
    color: '#005FE7',
    image: 'assets/course_rive/png/download.png',
  },
];
