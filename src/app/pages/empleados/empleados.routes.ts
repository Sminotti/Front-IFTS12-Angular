import {Routes} from '@angular/router';

const empleadosRoute:Routes = [
        {
            path: '',
            loadComponent: () => import('./listado/listado.component').then(m => m.ListadoComponent),
        }
    ];
    export default empleadosRoute;