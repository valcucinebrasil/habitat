import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaCozinhaPage } from './minha-cozinha.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaCozinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaCozinhaPageRoutingModule {}
