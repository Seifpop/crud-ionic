import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePersonnePageRoutingModule } from './update-personne-routing.module';

import { UpdatePersonnePage } from './update-personne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePersonnePageRoutingModule
  ],
  declarations: [UpdatePersonnePage]
})
export class UpdatePersonnePageModule {}
