import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductList } from './ProductsList/product-list.component';
import { ConvertToSpacePipe } from './ProductsList/product-list.pipe';
import { Star } from './Star/star.component';
import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';

@NgModule({
  declarations: [AppComponent, ProductList, ConvertToSpacePipe, Star, ProductDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
