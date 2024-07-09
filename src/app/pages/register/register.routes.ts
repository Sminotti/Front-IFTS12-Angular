import {Routes} from '@angular/router';

const registerRoute:Routes = [
        {
            path: '',
            loadComponent: () => import('./register.component').then(m => m.RegisterComponent),
        }
    ];
    export default registerRoute;