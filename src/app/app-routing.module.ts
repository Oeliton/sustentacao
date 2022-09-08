import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login',
  },
  /*{
    path:'login',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },*/
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule),
  },
  {
    path:'extracao',
    loadChildren: () => import('./extracao/extracao.module').then((m) => m.ExtracaoModule),
  },

  /*{
    path:'',
    component:LoginComponent,
    children:[
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  teste1(){
    console.log("AppRoutingModule");
  }
 }
