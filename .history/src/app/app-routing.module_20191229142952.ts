import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', 
    loadChildren:'./products/products.module#ProductsModule'
},
  { path: 'products/:id',
    loadChildren:'./single-product/single-product.module#SingleProductModule'},
  { path: 'categories/:id/products', loadChildren:'./products/products.module#ProductsModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{

}
