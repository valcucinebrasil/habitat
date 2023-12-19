import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusProjetoPageRoutingModule } from './status-projeto-routing.module';

import { StatusProjetoPage } from './status-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusProjetoPageRoutingModule
  ],
  declarations: [StatusProjetoPage]
})
export class StatusProjetoPageModule {}
