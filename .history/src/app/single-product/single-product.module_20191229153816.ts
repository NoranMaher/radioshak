import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { RouterModule } from '@angular/router';
import { SingleProductRoutes } from './single-product.routes';
import { CardComponent } from '../_partials/card/card.component';

@NgModule({
  declarations: [SingleProductComponent ],
  exports: [SingleProductComponent],
  imports: [
    RouterModule.forChild(SingleProductRoutes),
    CommonModule
  ]
})
export class SingleProductModule { }