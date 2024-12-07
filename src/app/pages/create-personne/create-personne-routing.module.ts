import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePersonnePage } from './create-personne.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePersonnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePersonnePageRoutingModule {}
