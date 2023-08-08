import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Formularios
import { FormsModule } from '@angular/forms';
// Paginas
import { Tab2Page } from './tab2.page';
// Rutas
import { Tab2PageRoutingModule } from './tab2-routing.module';
// Componentes
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
