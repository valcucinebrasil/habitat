import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSolicitacoesPage } from './all-solicitacoes.page';

const routes: Routes = [
  {
    path: '',
    component: AllSolicitacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSolicitacoesPageRoutingModule {}
