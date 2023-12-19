import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./pages/adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'minha-cozinha',
    loadChildren: () => import('./pages/minha-cozinha/minha-cozinha.module').then( m => m.MinhaCozinhaPageModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./pages/fornecedores/fornecedores.module').then( m => m.FornecedoresPageModule)
  },
  {
    path: 'status-projeto',
    loadChildren: () => import('./pages/status-projeto/status-projeto.module').then( m => m.StatusProjetoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
