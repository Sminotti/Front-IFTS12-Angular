import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ListadoComponent } from '@ppages/empleados/listado/listado.component';
import { LoginComponent } from '@ppages/login/login.component';
import { RegisterComponent } from '@ppages/register/register.component';

export const routes: Routes = [


  { path: 'empleados', component: ListadoComponent },
  { path: 'empleados', loadChildren: () => import('./pages/empleados/empleados.routes') },

  { path: 'login', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.routes') },

  { path: 'register', component: RegisterComponent },
  { path: 'register', loadChildren: () => import('./pages/register/register.routes') },

  { path: 'about', component: AboutComponent },
  { path: 'about', loadChildren: () => import('./pages/about/about.routes') },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.routes') },
  { path: '**', redirectTo: '/home' },
  
];
