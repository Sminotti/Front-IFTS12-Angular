import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'empleados',
    loadChildren: () => import('./pages/empleados/empleados.routes'),
  },

  { path: 'login', loadChildren: () => import('./pages/login/login.routes') },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.routes'),
  },

  { path: 'about', loadChildren: () => import('./pages/about/about.routes') },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.routes') },
  { path: '**', redirectTo: '/home' },
];
