import { Routes } from '@angular/router';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
  {
    path: 'second',
    loadComponent: () =>
      import('./second/second.component').then((mod) => mod.SecondComponent),
  },
  {
    path: 'third',
    loadComponent: () =>
      import('./third/third.component').then((mod) => mod.ThirdComponent),
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./client/client.component').then((mod) => mod.ClientComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./user/user.component').then((mod) => mod.UserComponent),
      },
    ],
  },
];
