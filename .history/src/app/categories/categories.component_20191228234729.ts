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
  categories: Category[] = [];
  selectedCategory : string = "temp";
  categoryProducts: Product[] = [];
  constructor(
    private dataService: DataService,
    private productsComponent: ProductsComponent,
    private router:Router
     ) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList(): void {
    this.dataService.getCategoriesList().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      
      });
  }
  fetchProductofCat(id){
  this.categoryProducts = this.productsComponent.fetchData(id);
    
  }
  
  goToDetailsPage(id : number) : void {
    this.router.navigateByUrl("/products/"+id);
  }
}
