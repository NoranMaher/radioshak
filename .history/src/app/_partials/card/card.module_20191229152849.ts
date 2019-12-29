import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [
    RouterModule,
    CommonModule

  ]
})
export class CardModule { }