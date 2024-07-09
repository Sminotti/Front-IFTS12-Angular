import {Routes} from '@angular/router';

const homeRoute:Routes = [
        {
            path: '',
            loadComponent: () => import('./home.component').then(m => m.HomeComponent),
        }
    ];
    export default homeRoute;