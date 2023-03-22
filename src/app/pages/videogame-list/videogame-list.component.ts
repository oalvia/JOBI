import { CartService } from './../../core/services/cart/cart.service';
import { Products } from './../../core/services/cart/ApiProducts.model';
import { VideogamesService } from './../../core/services/videogames/videogames.service';
import { Videogames } from './../../core/services/videogames/Videogames.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.scss']
})
export class VideogameListComponent implements OnInit {

  page: number = 1;
  public product?: Product;
  public products: Product[] = [];
  //public videogames: Videogames[] = [];
  public addProducts: Product[] = [];
  
  constructor(
    private router: Router,
    //private videogamesService: VideogamesService
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ){}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //const bookCategory = params['libros'];
      this.productsService.getVideogamesCategory().subscribe((videogame) =>{
        this.products = videogame
      })
    })

    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.addProducts = productsApi;
    })

    }

    public getProductDetail(id: string) {
      this.productsService.getProductsDetail(id).subscribe((videogameDetail) => {
        this.router.navigate(['videogames', videogameDetail._id])
      })
    }

    public addToCart(addProduct: Product){
      return this.cartService.addProduct(addProduct);
    }
  }





  // public goToDetail(id: string){
    
  //   if(this.videogames) {
  //     this.router.navigate(['videogames', id])
  //   }
  // }



//}
