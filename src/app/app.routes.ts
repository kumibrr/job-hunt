import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'create-hunt',
    loadComponent: () =>
      import('./create-hunt/create-hunt.component').then(
        (m) => m.CreateHuntComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./hunt-list/hunt-list.component').then(
        (m) => m.HuntListComponent
      ),
  },
];
