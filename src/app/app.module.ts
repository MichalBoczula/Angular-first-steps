import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductList } from './ProductsList/product-list.component';
import { ConvertToSpacePipe } from './ProductsList/product-list.pipe';
import { Star } from './Star/star.component';
import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { HomeComponent } from './Home/home.component';
import { ProductDetailsGuard } from './ProductDetails/product-details.guard';

@NgModule({
  declarations: [AppComponent, ProductList, ConvertToSpacePipe, Star, ProductDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductList },
    {
      path: "products/:id",
      canActivate: [ProductDetailsGuard],
      component: ProductDetailsComponent
    },
    { path: "", redirectTo: "home", pathMatch: 'full' },
    { path: "**", redirectTo: "home", pathMatch: 'full' },
  ])],
  bootstrap: [AppComponent],
})
export class AppModule { }
