import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusProjetoPage } from './status-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: StatusProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusProjetoPageRoutingModule {}
