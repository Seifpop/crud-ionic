import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnesListPageRoutingModule } from './personnes-list-routing.module';

import { PersonnesListPage } from './personnes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnesListPageRoutingModule
  ],
  declarations: [PersonnesListPage]
})
export class PersonnesListPageModule {}
