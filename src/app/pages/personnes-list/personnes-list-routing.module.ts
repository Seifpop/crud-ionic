import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnesListPage } from './personnes-list.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnesListPageRoutingModule {}
