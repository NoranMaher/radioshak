import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { RouterModule } from '@angular/router';
import { SingleProductRoutes } from './single-product.routes';

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    RouterModule.forChild(PostsRoutes),
    CommonModule
  ]
})
export class PostsModule { }