import { Product } from 'src/app/core/services/products/models/product.models';
import { CartService } from './../../../core/services/cart/cart.service';
import { Router } from '@angular/router';
import { Products } from './../../../core/services/cart/ApiProducts.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit{

  public myCart$ = this.cartService.myCart$;
  public products: Product[] = [];
  public total: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
  ){
    
  }

  public ngOnInit(): void {

    this.cartService.getApiProducts().subscribe((productsApi) => {
      this.products = productsApi;
    })

  }

  public totalProduct(price: number, units: number){
    return price * units;
  }

  public deleteProduct(id: string){
    this.cartService.deleteProduct(id);
  }

  public updateUnits(operation: string, id: string){
    const product = this.cartService.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.stock > 0) {
        product.stock = product.stock - 1;
      }
      if (operation === 'add') {
        product.stock = product.stock + 1;
      }
      if (product.stock === 0) {
        this.deleteProduct(id);
      }
    }
  }

  public totalCart(){
    const result = this.cartService.totalCart();
    return result;
  }

  public totalNumProducts(){
    const totalProducts = this.cartService.totalNumProducts();
    return totalProducts;
  }

  public async sendOrder() {
    const newOrder = {
      "products": [
      {
        "name": "La Secta",
        "image": "https://res.cloudinary.com/dj5hu7p44/image/upload/v1678913070/libros/la_secta_suker9.jpg",
        "price": 22.70,
        "description": "Después de El mentalista, vuelven Camilla Läckberg y Henrik Fexeus. Déjate atrapar. Más de 1.000.000 de lectores lo están esperando. La agente Mina Dabiri y sus compañeros del departamento de Homicidios de la policía de Estocolmo se enfrentan a un nuevo reto: un niño ha desaparecido de un parque infantil y el caso comparte muchas similitudes con una investigación anterior de trágico desenlace. Los pocos indicios que existen, plagados de códigos y mensajes en clave, parecen seguir las reglas de un juego ideado por una mente perversa. Dos años después de los dramáticos acontecimientos que unieron sus vidas, Mina recurrirá de nuevo al mentalista Vincent Walder para llegar hasta el final de una trepidante investigación que, en esta ocasión, la afectará de forma muy personal: ¿cuál es su vinculación con el caso? ¿Quién se esconde entre las sombras? Y, por encima de todo, ¿cuál es su objetivo? Mientras Mina intenta mantener a salvo los recuerdos del pasado y Vincent lucha por ignorar la sombra que esconde su alma, el escudo que ambos han construido alrededor empieza, finalmente, a desmoronarse.",
        "type": "Novela negra y policíaca",
        "author": ["Camilla Lackberg", "Henrik Fexeus"],
        "pages": 752,
        "editorial": "Planeta",
        "languague": "castellano",
        "bookbinding": "Tapa dura",
        "yearEdition": 2023,
        "isbn": 9788408268307,
        "category": "libros",
        "stock": 10
      },
      {
      "name": "Pickup Truck No. 02",
      "decades": "1960-1970",
      "brand": "Tonka",
      "category": "juguetes",
      "subcategory": "coches, camiones y pistas",
      "tags": ["vintage", "pesado", "Estados Unidos"],
      "materials": ["metal", "plástico"],
      "age": "6+",
      "price": 291.3,
      "description": "Esta es la clásica camioneta Tonka Bronze Step Side Pickup No. 02 de 1959. Tiene 13 pulgadas de largo y el acabado original. Por supuesto, Tonka fabricado en Minnesota, está diseñado para durar para siempre.",
      "image": "https://res.cloudinary.com/dj5hu7p44/image/upload/v1679263205/juguetes/tonkapickup_jsx8yl.jpg",
      "stock": 3
    }
      ]
  };
    return this.cartService.sendOrder(newOrder).subscribe();
  }
}
