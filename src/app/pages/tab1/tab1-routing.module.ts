import { NgModule } from '@angular/core';
// Rutas
import { RouterModule, Routes } from '@angular/router';
// Paginas
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  { path: '', component: Tab1Page }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
