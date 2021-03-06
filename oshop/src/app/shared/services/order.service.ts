import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private shoppingCartService:ShoppingCartService,private db: AngularFireDatabase) { }

  async placeOrder(order){
   let result = await  this.db.list('/orders').push(order);
   this.shoppingCartService.clearCart();
   return result;
  }

  getOrder(){
return this.db.list('/orders/').valueChanges();
  }

   getOrderItemByUser(userId: string){

    return this.db.list('/orders/', 
    ref => ref.orderByChild('userId')).snapshotChanges()
    .map(orders =>  orders.map(order => ({ key: order.key, ...order.payload.val() }))
    );
   
  }
}
