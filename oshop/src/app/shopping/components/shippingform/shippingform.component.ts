import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { Subscription } from '../../../../../node_modules/rxjs';
import { Router } from '../../../../../node_modules/@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Order } from 'shared/model/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shippingform.component.html',
  styleUrls: ['./shippingform.component.css']
})
export class ShippingformComponent implements OnInit {

  @Input('cart') cart: ShoppingCart;
  shipping: any ={};
  userSubscription: Subscription;
  userId: string;
  subscription: Subscription;


 

  constructor(
    private routerServices: Router,
    private authService: AuthService,
    private orderservice: OrderService,
    private shoppingCartService: ShoppingCartService) {}
  
  async ngOnInit() {
  let cart$ = await this.shoppingCartService.getCart();
  this.subscription = cart$.subscribe(cart => this.cart = cart);
  this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

 
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSubscription.unsubscribe();
    
  }

  async  placeOrder(){
    let order = new Order(this.userId,this.shipping,this.cart);
      let res = await this.orderservice.placeOrder(order);
     
this.routerServices.navigate(['/order-success',res.key])
  }

}
