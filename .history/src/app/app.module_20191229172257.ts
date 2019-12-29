import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchComponent } from './_partials/search/search.component';
import { CardModule } from './_partials/card/card.module';
import { SliderComponent } from './_partials/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';

@NgModule({
	declarations: [ AppComponent, SearchComponent, SliderComponent, FilterPipe ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
    BrowserAnimationsModule,
    CategoriesModule
    FormsModule,
    CardModule,
		NgbModule.forRoot()
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
