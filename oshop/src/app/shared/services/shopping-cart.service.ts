import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from 'shared/model/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges()
      .map((x: any) => new ShoppingCart((x) ? x.items : {}))
  }

  async addToCart(product: Product) {
    this.updateitem(product, 1);

  }

  async removeFromCart(product: Product) {
    
    this.updateitem(product, -1);
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
   this.db.object('/shopping-carts/' + cartId + '/items/').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime().toString()
    });
  }

  

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;
    //this.create().then(result => {

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private async updateitem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    item$.valueChanges().take(1).subscribe((item: any) => {
      let quantity = (item) ? (item.quantity) + change : 1;
      if (quantity === 0) (item$.remove())  ;
      else 
      item$.update({
        // product: product,
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: quantity
      });
    })
  }

 

}
