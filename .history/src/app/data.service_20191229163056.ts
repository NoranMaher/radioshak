import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';
import { Category } from './category';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	@Output() searchChanged: EventEmitter<any> = new EventEmitter();
	constructor(private http: HttpClient) {}


	public getProductsList(): Observable<Product[]> {
		return this.http.get<Product[]>('assets/samplejson/products.json');
	}
	public getSingleProduct(id: number): Observable<Product[]> {
		let productList = this.http.get<Product[]>('assets/samplejson/products.json');

		let selectedProd = productList.pipe(
			map((productList) => {
				const items = productList.filter((item) => item.id === id);
				productList = items;
				return productList;
			})
		);
		return selectedProd;
	}

	public getCategoriesList(): Observable<Category[]> {
		return this.http.get<Category[]>('assets/samplejson/categories.json');
	}
	public filter(filterText: string) {
		let productList = this.http.get<Product[]>('assets/samplejson/products.json');

		let selectedProd = productList.pipe(
			map((productList) => {
				const items = productList.filter((item) => item.productTitle === filterText);
				productList = items;
				return productList;
			})
		);


		
		console.log('selectedProd', selectedProd);
		this.searchChanged.emit(selectedProd);
		// return selectedProd;
	}
}
