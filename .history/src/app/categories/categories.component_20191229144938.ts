import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Category } from '../category';
import { Product } from '../product';
import { Router } from '@angular/router';
import {ProductsComponent} from '../products/products.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	public products: Product[] = [];
	public allproducts: Product[] = [];

	selectedProduct: string = 'temp';
	id: number;

	private sub: any;
	private service: any;
	constructor(private dataService: DataService, private router: Router) {}


  ngOnInit() {
    this.fetchData();
  }

  setProductData(data, id) {
		this.allproducts = data.sort((a, b) => Number(a.productOrder) - Number(b.productOrder));

	
			var catProducts = this.allproducts.filter(function(p) {
				return p.categoryID == id;
			});
			this.products = catProducts;
		
		return this.products;
	}

	fetchData(id: number = null) {
		this.service = this.dataService.getProductsList().subscribe((products: Product[]) => {
			return this.setProductData(products, id);
		});

		return this.products;
	}
	ngOnDestroy() {
		this.products = [];
		this.allproducts = [];
		this.service.unsubscribe();
	}

  
  
  goToDetailsPage(id : number) : void {
    this.router.navigateByUrl("/products/"+id);
  }
}
