import { CartService } from 'src/app/core/services/cart/cart.service';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private cartService: CartService
  ) { }

}
