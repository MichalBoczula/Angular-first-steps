import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductList } from './ProductsList/product-list.component';
import { ConvertToSpacePipe } from './ProductsList/product-list.pipe';

@NgModule({
  declarations: [AppComponent, ProductList, ConvertToSpacePipe],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
