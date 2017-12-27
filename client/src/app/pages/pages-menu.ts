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
      //{
      //  title: 'My Project',
      //  link: '/pages/projects/my-project',
      //},
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
    title: 'Calendar',
    icon: 'ion-ios-calendar-outline',
    children: [
      //{
      //  title: 'My Events',
      //  link: '/pages/calendar/inputs',
      //},
      {
        title: 'All Events',
        link: '/pages/calendar/all-events',
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
      /*{
        title: 'Archived Tasks',
        link: '/pages/forms/inputs',
      },*/
    ]
  },
  {
    title: 'File Manager',
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
  {
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
  },
  /*{
    title: 'Tickets',
    icon: 'ion-ios-paperplane-outline',
    children: [
      {
        title: 'Tickets',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Assigned Tickets',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Departaments',
        link: '/pages/forms/inputs',
      },
      {
        title: 'My Tickets',
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
        link: '/pages/forms/inputs',
      },
      {
        title: 'All Finance',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Categories',
        link: '/pages/forms/inputs',
      }]
  },
  /*{
    title: 'Invoices',
    icon: 'ion-ios-pricetags-outline',
    children: [
      {
        title: 'All Invoices',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Reoccuring',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Templates',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Paying Accounts',
        link: '/pages/forms/inputs',
      },
      {
        title: 'My Invoices',
        link: '/pages/forms/inputs',
      }]
  },*/
  {
    title: 'Notes',
    icon: 'ion-ios-photos-outline',
    children: [
      {
        title: 'All Notes',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Project Notes',
        link: '/pages/forms/inputs',
      }]
  },
  /*{
    title: 'Leads',
    icon: 'ion-ios-monitor-outline',
    children: [
      {
        title: 'Leads',
        link: '/pages/forms/inputs',
      },
      {
        title: 'My Leads',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Lead Forms',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Manage',
        link: '/pages/forms/inputs',
      }]
  },
  {
    title: 'Services',
    icon: 'ion-ios-briefcase-outline',
    children: [
      {
        title: 'Services',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Orders',
        link: '/pages/forms/inputs',
      }]
  },*/
  {
    title: 'Reports',
    icon: 'ion-ios-list-outline',
    children: [
      {
        title: 'Tickets Reports',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Time Reports',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Finance Reports',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Invoices Reports',
        link: '/pages/forms/inputs',
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
    link: '/pages/maps/gmaps',
  },

  /*
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
