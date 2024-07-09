import {Routes} from '@angular/router';

const aboutRoute:Routes = [
        {
            path: '',
            loadComponent: () => import('./about.component').then(m => m.AboutComponent),
        }
    ];
    export default aboutRoute;