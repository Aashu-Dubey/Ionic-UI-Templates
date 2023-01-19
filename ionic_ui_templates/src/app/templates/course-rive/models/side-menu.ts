export interface MenuItem {
  id: string;
  stateMachine: string;
  artboard: string;
  status: boolean;
  show: boolean;
}

export const menuItemsList: MenuItem[] = [
  {
    id: 'Home',
    stateMachine: 'HOME_interactivity',
    artboard: 'HOME',
    status: false,
    show: false,
  },
  {
    id: 'Search',
    stateMachine: 'SEARCH_Interactivity',
    artboard: 'SEARCH',
    status: false,
    show: false,
  },
  {
    id: 'Favorites',
    stateMachine: 'STAR_Interactivity',
    artboard: 'LIKE/STAR',
    status: false,
    show: false,
  },
  {
    id: 'Help',
    stateMachine: 'CHAT_Interactivity',
    artboard: 'CHAT',
    status: false,
    show: false,
  },
];
export const menuItems2List: MenuItem[] = [
  {
    id: 'History',
    stateMachine: 'TIMER_Interactivity',
    artboard: 'TIMER',
    status: false,
    show: false,
  },
  {
    id: 'Notification',
    stateMachine: 'BELL_Interactivity',
    artboard: 'BELL',
    status: false,
    show: false,
  },
];
export const menuItems3List: MenuItem[] = [
  {
    id: 'Dark Mode',
    stateMachine: 'SETTINGS_Interactivity',
    artboard: 'SETTINGS',
    status: false,
    show: false,
  },
];
