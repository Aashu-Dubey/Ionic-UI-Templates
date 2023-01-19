export interface BottomTabItem {
  id: string;
  stateMachine: string;
  artboard: string;
  status: boolean;
  show: boolean;
}

export const tabItemsList: BottomTabItem[] = [
  {
    id: 'tab_chat',
    stateMachine: 'CHAT_Interactivity',
    artboard: 'CHAT',
    status: false,
    show: false,
  },
  {
    id: 'tab_search',
    stateMachine: 'SEARCH_Interactivity',
    artboard: 'SEARCH',
    status: false,
    show: false,
  },
  {
    id: 'tab_timer',
    stateMachine: 'TIMER_Interactivity',
    artboard: 'TIMER',
    status: false,
    show: false,
  },
  {
    id: 'tab_bell',
    stateMachine: 'BELL_Interactivity',
    artboard: 'BELL',
    status: false,
    show: false,
  },
  {
    id: 'tab_user',
    stateMachine: 'USER_Interactivity',
    artboard: 'USER',
    status: false,
    show: false,
  },
];
