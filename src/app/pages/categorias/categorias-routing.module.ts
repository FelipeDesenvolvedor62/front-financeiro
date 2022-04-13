import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaListaComponent, CategoriaFormComponent } from './';

const routes: Routes = [
  { path: '', component: CategoriaListaComponent },
  { path: 'new', component: CategoriaFormComponent },
  { path: ':id/edit', component: CategoriaFormComponent }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
