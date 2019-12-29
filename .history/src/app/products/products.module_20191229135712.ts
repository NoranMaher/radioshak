import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routes';

@NgModule({
  declarations: [SingleProductComponent],
  exports: [SingleProductComponent],
  imports: [
    RouterModule.forChild(SingleProductRoutes),
    CommonModule
  ]
})
export class SingleProductModule { }