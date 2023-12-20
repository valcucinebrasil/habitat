import { PreloadAllModules } from '@angular/router';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSolicitacoesPageRoutingModule } from './all-solicitacoes-routing.module';

import { AllSolicitacoesPage } from './all-solicitacoes.page';

import { PickupCallCardModule} from '../../components/pickup-call-components.module'




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSolicitacoesPageRoutingModule,
    PickupCallCardModule

  ],
  declarations: [AllSolicitacoesPage,

]
})
export class AllSolicitacoesPageModule {}
