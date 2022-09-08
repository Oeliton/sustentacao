import { MinhabrkComponent } from './minhabrk/minhabrk.component';
import { TotemComponent } from './totem/totem.component';
import { ExtracaoModule } from './extracao.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'extracao-totem',
  },
  {
    path:'extracao-totem',
    component: TotemComponent,
  },
  {
    path:'extracao-minhabrk',
    component: MinhabrkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtracaoRoutingModule { }
