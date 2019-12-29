import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routes';
import { CardComponent } from '../_partials/card/card.component';


@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [
    RouterModule.forChild(ProductsRoutes),
    CommonModule
  ]
})
export class ProductsModule { }