import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirigir la ruta raíz ('') a la página Home
  { path: '', loadChildren: () => import('src/app/home/home.module').then(m => m.HomePageModule) },

  // Ruta para la lista de Pokémon
  { path: 'pokemon-list', loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
