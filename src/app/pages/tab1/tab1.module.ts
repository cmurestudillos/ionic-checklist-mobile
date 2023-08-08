import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Formularios
import { FormsModule } from '@angular/forms';
// Paginas
import { Tab1Page } from './tab1.page';
// Rutas
import { Tab1PageRoutingModule } from './tab1-routing.module';
// Componentes
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
