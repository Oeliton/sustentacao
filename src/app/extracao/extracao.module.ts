import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtracaoRoutingModule } from './extracao-routing.module';
import { TotemComponent } from './totem/totem.component';
import { MinhabrkComponent } from './minhabrk/minhabrk.component';


@NgModule({
  declarations: [
    TotemComponent,
    MinhabrkComponent
  ],
  imports: [
    CommonModule,
    ExtracaoRoutingModule
  ],
  exports: [TotemComponent],
})
export class ExtracaoModule { }
