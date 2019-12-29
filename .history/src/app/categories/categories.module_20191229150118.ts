import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutes } from './categories.routes';
import { CardComponent } from '../_partials/card/card.component';


@NgModule({
  declarations: [CategoriesComponent , CardComponent],
  exports: [CategoriesComponent],
  imports: [
    RouterModule.forChild(CategoriesRoutes),
    CommonModule

  ]
})
export class CategoriesModule { }