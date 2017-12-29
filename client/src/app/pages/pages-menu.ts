import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'ion-ios-pie-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Projects',
    icon: 'ion-ios-folder-outline',
    children: [
      {
        title: 'All Projects',
        link: '/pages/projects/smart-table',
      },
      {
        title: 'Categories',
        link: '/pages/projects/categories',
      },
    ]
  },
  {
    title: 'Tasks',
    icon: 'ion-ios-compose-outline',
    children: [
      {
        title: 'My Assigned Tasks',
        link: '/pages/tasks/my-tasks',
      },
      {
        title: 'All Project Tasks',
        link: '/pages/tasks/all-tasks',
      },
    ]
  },
  {
    title: 'Files',
    icon: 'ion-ios-copy-outline',
    children: [
      {
        title: 'My Project Files',
        link: '/pages/files/my-files',
      },
      {
        title: 'All Project Files',
        link: '/pages/files/all-files',
      },
    ]
  },
  {
    title: 'Team',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Members',
        link: '/pages/teams/members',
      },
      {
        title: 'All Teams',
        link: '/pages/teams/teammembers',
      },
      {
        title: 'Team Roles',
        link: '/pages/teams/teamroles',
      },
    ]
  },
  /*{
    title: 'Timer',
    icon: 'ion-ios-timer-outline',
    children: [
      {
        title: 'My Timers',
        link: '/pages/forms/inputs',
      },
      {
        title: 'All Timers',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Status',
        link: '/pages/forms/inputs',
      },
    ]
  },*/
  {
    title: 'Finance',
    icon: 'ion-ios-calculator-outline',
    children: [
      {
        title: 'My Finance',
        link: '/pages/finances/my-finances',
      },
      {
        title: 'All Finance',
        link: '/pages/finances/all-finances',
      },
      {
        title: 'Categories',
        link: '/pages/finances/categories',
      }]
  },
  {
    title: 'Notes',
    icon: 'ion-ios-paper-outline',
    children: [
      {
        title: 'My Notes',
        link: '/pages/notes/my-notes',
      },
      {
        title: 'All Notes',
        link: '/pages/notes/all-notes',
      }]
  },
  {
    title: 'Maps',
    icon: 'ion-ios-location-outline',
    link: '/pages/maps/gmaps',
  },
  {
    title: 'Settings',
    icon: 'ion-ios-gear-outline',
    link: '/pages/settings',
  },
];
