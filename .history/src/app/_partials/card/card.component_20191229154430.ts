import { Component, OnInit , Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product : Product = Product[];
  @Input() page : string;
  constructor() { }

  ngOnInit() {
    
  }


}
