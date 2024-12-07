import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePersonnePage } from './update-personne.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePersonnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePersonnePageRoutingModule {}
