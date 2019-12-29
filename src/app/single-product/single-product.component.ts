import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
  
})
export class SingleProductComponent implements OnInit {
  singleProduct: {};


  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.activeRoute.params.subscribe(routeParams => {

      this.dataService.getSingleProduct(routeParams.id).subscribe(
       (singleProduct) => {
          this.singleProduct = singleProduct[0];
        });

    });

  }

  goToProductsPage() : void {
    this.router.navigateByUrl("/products");
  }

}
