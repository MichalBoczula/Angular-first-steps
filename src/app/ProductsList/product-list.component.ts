import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductList implements OnInit, OnDestroy {
  title: string = 'new title';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];
  private products: IProduct[] = [];
  private errorMessage: string = '';
  private subscribtion!: Subscription;

  constructor(private productService: ProductService) { }

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.filterProducts(value);
    console.log('set', value);
  }

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((prod) =>
      prod.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productService.getProductsLocal()
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.title = message;
  }

  ngOnDestroy(): void {
    // this.subscribtion.unsubscribe();
  }
}
