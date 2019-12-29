import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Product } from '../product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public allproducts: Product[] = [];

  selectedProduct: string = "temp";
  id: number;
  
  private sub: any;
  private service: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
    this.dataService.searchChanged.subscribe(
      (products: Product[]) => {
        return this.setProductData(products, null);
      }
   
    );
  }


  setProductData(data, id) {

    this.allproducts = data.sort((a, b) => Number(a.productOrder) - Number(b.productOrder));

    if (id !== null) {
      var catProducts = this.allproducts.filter(function (p) {
        return p.categoryID == id;
      });
      this.products = catProducts;
    }
    else {
      this.products = this.allproducts;
    }
    return this.products;

  }

  fetchData(id: number = null) {
    this.service = this.dataService.getProductsList().subscribe(
      (products: Product[]) => {
        return this.setProductData(products, id);
      });


return this.products;
  }
  ngOnDestroy() {
    this.products = [];
    this.allproducts = [];
    this.service.unsubscribe();
  }




  goToDetailsPage(id: number): void {
    this.router.navigateByUrl("/products/" + id);
  }

}
