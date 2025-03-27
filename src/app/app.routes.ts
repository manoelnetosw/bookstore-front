import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/views/home/home.component').then(
                (m) => m.HomeComponent
            )
    },
    {
        path: 'categorias',
        loadComponent: () =>
            import('./components/views/categoria/categoria-read/categoria-read.component').then(
                (m) => m.CategoriaReadComponent
            )
    }

];