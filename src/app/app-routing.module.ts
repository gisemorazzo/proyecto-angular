import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductNaturaComponent } from './product-natura/product-natura.component';
import { ProductAboutComponent } from './product-about/product-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-natura',
    pathMatch:'full'
  },
    {
    path :'product-natura',
    component :ProductNaturaComponent,
  },
  {
    path : 'product-about',
    component : ProductAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
