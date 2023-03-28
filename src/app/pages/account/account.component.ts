import { UserServiceService } from './../../core/services/user/user-service.service';
import { AccountService } from './../../core/services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { APIOrder } from 'src/app/core/services/account/ApiOrder.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{

  public userId?: string | null = '';
  public userName: string | null = '';
  public userSurname: string | null = '';
  public userAvatar: string | null = '';
  public userEmail: string | null = '';
  public userPhone: string | null = '';

  public orders: any;

  constructor(
    private accountService: AccountService,
    private userService: UserServiceService
  ){}

  ngOnInit(): void {

    this.userId = this.userService.getUserId();
    this.userName = this.userService.getUserName();
    this.userSurname = this.userService.getUserSurname();
    this.userAvatar = this.userService.getUserImage();
    this.userEmail = this.userService.getUserEmail();
    this.userPhone = this.userService.getUserPhone();

    this.accountService.getApiProducts().subscribe((ordersApi) => {
      const idOrder = ordersApi.find((id) => {
        return id.user
      });

       if (idOrder === this.userId) {
        this.orders = ordersApi;
        console.log(this.orders);
       }
      });

  }
}
