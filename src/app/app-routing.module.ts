import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'personnes-list', pathMatch: 'full' },
    { path: 'personnes-list', loadChildren: () => import('./pages/personnes-list/personnes-list.module').then(m => m.PersonnesListPageModule) },
    { path: 'update-personne/:id', loadChildren: () => import('./pages/update-personne/update-personne.module').then(m => m.UpdatePersonnePageModule) },   
    { path: 'create-personne', loadChildren: () => import('./pages/create-personne/create-personne.module').then( m => m.CreatePersonnePageModule)},
// Nouvelle route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
