import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  page: number = 1;
  public total: number = 210;
  public term = '';

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  public getProductDetail(id: string) {
    this.productsService.getProductsDetail(id).subscribe((productDetail) => {
      this.router.navigate(['detail', productDetail._id]);
    });
  }
}
