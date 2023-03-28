import { LanguageService } from './../../services/language/language.service';
import { CartService } from './../../services/cart/cart.service';
import { UserServiceService } from './../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged: boolean = false;
  public logOut: boolean = false;
  public viewCart: boolean = false;
  public user: string | null;
  public currentLang = '';
 

  constructor(
    private router: Router,
    private userService: UserServiceService,
    private cartService: CartService,
    public translationService: TranslationService,

  ){
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  public ngOnInit(): void {
    this.userService.isLogged();
    this.userService.userLogged$.subscribe((isLogged) => this.logged = isLogged);
  }

  public navigateToList() {
    this.router.navigate(['home'])
  }

  public addButton(){
    this.logOut = true;
  }

  public cerrarSesion(){
    this.userService.logoutUser();
  }

  public onToggleCart(){
    this.viewCart = !this.viewCart;
  }

  public totalNumProducts(){
    const totalProducts = this.cartService.totalNumProducts();
    return totalProducts;
  }
    public switchLang(lang: string)
    {
     return this.translationService.switchLang(lang)
    }
  }
