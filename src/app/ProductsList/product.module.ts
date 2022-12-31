import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list.component';
import { ProductDetailsComponent } from '../ProductDetails/product-details/product-details.component';
import { ConvertToSpacePipe } from './product-list.pipe';
import { Star } from '../Star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from '../ProductDetails/product-details.guard';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    ProductList,
    ProductDetailsComponent,
    ConvertToSpacePipe],
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductList },
      {
        path: "products/:id",
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
