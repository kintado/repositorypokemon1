import { Routes } from '@angular/router';
import { AppShellComponent } from './app-shell-component/app-shell-component';

export const routes: Routes = [
  {
    path: '',
     component: AppShellComponent,
    children: [
      
      
      {
        path: 'about',
        loadComponent: () =>
          import('./chisiamo/chisiamo').then(m => m.Chisiamo),
        title: 'Chi siamo'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contatti/contatti').then(m => m.Contatti),
        title: 'Contatti'
      },
      {
        path: 'bulbasaur',
        loadComponent: () =>
          import('./bulbasaur/bulbasaur').then(m => m.Bulbasaur),
        title: 'Bulbasaur'
      },
      {
        path: 'charmander',
        loadComponent: () =>
          import('./charmander/charmander').then(m => m.Charmander),
        title: 'Charmander'
      },
      {
        path: 'pikachu',
        loadComponent: () =>
          import('./pikachu/pikachu').then(m => m.Pikachu),
        title: 'Pikachu',
        children: [
          {
            path: 'pichu',
            loadComponent: () =>
              import('./pichu/pichu').then(m => m.Pichu),
            title: 'Pichu'
          },
          {
            path: 'raichu',
            loadComponent: () =>
              import('./raichu/raichu').then(m => m.Raichu),
            title: 'Raichu'
          }
        ]
      },
      {
        path: 'general',
        outlet: 'genout',
        loadComponent: () =>
          import('./general/general').then(m => m.General),
        title: 'General'
      }
    ]
  },
  // fallback per eventuali URL non riconosciute
  { path: '**', redirectTo: '' }
];
