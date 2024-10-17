import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationController, ModalController, Platform, ToastController } from '@ionic/angular';
import { Course, courseSectionsList, coursesList } from 'src/app/templates/course-rive/models/course';
import { Template } from 'src/app/types/home';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { Router } from '@angular/router';
import { CashbackService } from 'src/app/services/cashback.service';

interface ChatMessage {
  text: string;
  type: 'user' | 'bot';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  isModalOpen = false;
  selectedSection: any;
  selectedScore: any;
  calendarOptions: any;
  courses = coursesList;
  courseSections = courseSectionsList;
  events: any[] = [];
  showChat = false;
  userInput: string = '';
  messages: ChatMessage[] = [];

  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

  templates: Template[] = [
    {
      id: 'course-rive',
      background: 'assets/course_rive/course_rive.png',
      screenPath: '/course-rive',
    },
    {
      id: 'hotel-booking',
      background: 'assets/hotel/hotel_booking.png',
      // screenPath: 'hotel-booking',
      screenPath: undefined,
    },
    {
      id: 'fitness-app',
      background: 'assets/fitness_app/fitness_app.png',
      screenPath: undefined,
    },
    {
      id: 'design-course',
      background: 'assets/design_course/design_course.png',
      screenPath: undefined,
    },
  ];
  multiple = true;

  constructor(
    public toastController: ToastController,
    private animationCtrl: AnimationController,
    private platform: Platform,
    private router: Router,
    private cashbackService: CashbackService
  ) {}

  cashbackData = [
    { title: 'Remboursement Supermarché', amount: 10, date: '2024-10-20' },
    { title: 'Cashback Essence', amount: 15, date: '2024-10-21' },
    { title: 'Remboursement Restaurant', amount: 20, date: '2024-10-22' },
    { title: 'Cashback Cinéma', amount: 5, date: '2024-10-23' },
    { title: 'Remboursement Électronique', amount: 30, date: '2024-10-24' },
    { title: 'Cashback Vêtements', amount: 25, date: '2024-10-25' },
    { title: 'Remboursement Voyage', amount: 50, date: '2024-10-26' },
    { title: 'Cashback Pharmacie', amount: 8, date: '2024-10-27' },
    { title: 'Remboursement Loisirs', amount: 12, date: '2024-10-28' },
    { title: 'Cashback Abonnement', amount: 18, date: '2024-10-29' },
    { title: 'Remboursement Cadeaux', amount: 22, date: '2024-10-30' },
    { title: 'Cashback Livraison', amount: 7, date: '2024-10-31' },
  ];

  headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay',
  };

  ngAfterViewInit() {
    setTimeout(
      () => this.initListAnimation(),
      this.platform.is('android') ? 500 : 0
    );
  }

  ngOnInit() {
    this.loadCashbackOffers();
    this.loadEvents(); // Charger les événements lors de l'initialisation
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      locale: frLocale, // Spécifiez la locale ici, pas seulement 'fr'
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      editable: true,
      selectable: true,
      dateClick: this.handleDateClick.bind(this),
      events: this.events
    };
  }

  toggleChat() {
    this.showChat = !this.showChat;
  }

  loadCashbackOffers() {
    this.cashbackService.getCashbackOffers().subscribe({
      next: (data) => {
        this.cashbackData = data.offers;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des offres de cashback', error);
      },
      complete: () => {
        console.log('Chargement des offres de cashback terminé');
      }
    });
  }

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, type: 'user' });
      this.userInput = '';
      setTimeout(() => {
        this.messages.push({ text: 'Bonjour !', type: 'bot' });
      }, 1000);
    }
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  cashback() {
    this.router.navigate(['/course-rive']);
  }

  handleDateClick(arg: any) {
    const title = prompt('Entrez le titre de l\'événement :');
    if (title) {
      const newEvent = {
        title: title,
        start: arg.date
      };
      this.events.push(newEvent);
      this.saveEvents();
    }
  }

  saveEvents() {
    localStorage.setItem('calendarEvents', JSON.stringify(this.events));
  }

  loadEvents() {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
    }
  }

  /**
  handleDateClick(arg: any) {
    const title = prompt('Entrez le titre de l\'événement :'); // Demander à l'utilisateur de saisir le titre de l'événement
    if (title) {
      const newEvent = {
        title: title,
        start: arg.date // Utiliser la date cliquée pour l'événement
      };
      this.events.push(newEvent);
      this.saveEventToServer(newEvent); // Envoyer l'événement au serveur
    }
  }

  // Méthode pour sauvegarder l'événement sur le serveur
  saveEventToServer(event: any) {
    fetch('https://your-api-url/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    }).then(response => response.json())
      .then(data => console.log('Événement enregistré :', data))
      .catch(error => console.error('Erreur lors de l\'enregistrement :', error));
  }
  */

  getGaugeColor(): string {
    if (this.selectedScore <= 15) {
      return 'red';
    } else if (this.selectedScore <= 30) {
      return 'orange';
    } else if (this.selectedScore <= 60) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  getGaugeMessageStyle(): { [klass: string]: any } {
    if (this.selectedScore <= 15) {
      return { 'color': 'red' };
    } else if (this.selectedScore <= 30) {
      return { 'color': 'orange' };
    } else if (this.selectedScore <= 60) {
      return { 'color': 'yellow' };
    } else if (this.selectedScore <= 85) {
      return { 'color': 'lightgreen' };
    } else {
      return { 'color': 'green' };
    }
  }

  getGaugeMessage(): string {
    if (this.selectedScore <= 15) {
      return 'Ne vous découragez pas, vous pouvez encore améliorer votre score!';
    } else if (this.selectedScore <= 30) {
      return 'Bon effort, continuez à travailler pour progresser davantage!';
    } else if (this.selectedScore <= 60) {
      return 'Vous êtes sur la bonne voie, continuez comme ça!';
    } else if (this.selectedScore <= 85) {
      return 'Excellent travail, votre score est impressionnant!';
    } else {
      return 'Félicitations, vous êtes au top! Continuez à maintenir ce niveau.';
    }
  }

  handleEventClick(clickInfo: any) {
    alert(`Vous avez cliqué sur : ${clickInfo.event.title}`);
  }

  initListAnimation() {
    const itemRefArray = this.templateListRef?.toArray();
    for (let i = 0; i < itemRefArray!.length; i++) {
      const element = itemRefArray![i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }

  trackCourses(i: number, course: Course) {
    return `${course.title}_${i}`;
  }

  trackAvatarItems(_i: number, num: number) {
    return `avatar_${num}`;
  }

  async onScreenClick(temp: Template) {
    if (!temp.screenPath) {
      const toast = await this.toastController.create({
        message: 'Coming soon...',
        duration: 2000,
      });
      toast.present();
    }
  }

  listKeyExtractor(_i: number, screen: Template) {
    return screen.id;
  }

  convertScoreToPoints(score: number): number {
    return score * 80; // 1% = 80 points
  }

  openModal(section: any) {
    this.selectedSection = section;
    if (section.title === 'Votre Score') {
      this.selectedScore = 10;
    } else {
      this.selectedScore = null;
    }

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedSection = null;
    this.selectedScore = null;
  }
}
