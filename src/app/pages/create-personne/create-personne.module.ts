import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePersonnePageRoutingModule } from './create-personne-routing.module';

import { CreatePersonnePage } from './create-personne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePersonnePageRoutingModule
  ],
  declarations: [CreatePersonnePage]
})
export class CreatePersonnePageModule {}
