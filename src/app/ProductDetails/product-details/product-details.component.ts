import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ProductsList/product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTile: string = "ProductDetails: ";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTile += `${id}`;

    this.product = {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2020',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png',
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
