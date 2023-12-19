import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaCozinhaPageRoutingModule } from './minha-cozinha-routing.module';

import { MinhaCozinhaPage } from './minha-cozinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaCozinhaPageRoutingModule
  ],
  declarations: [MinhaCozinhaPage]
})
export class MinhaCozinhaPageModule {}
