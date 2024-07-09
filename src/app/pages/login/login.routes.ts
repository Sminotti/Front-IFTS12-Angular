import {Routes} from '@angular/router';

const loginRoute:Routes = [
        {
            path: '',
            loadComponent: () => import('./login.component').then(m => m.LoginComponent),
        }
    ];
    export default loginRoute;