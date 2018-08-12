import { ShoppingCart } from 'shared/model/shopping-cart';
import { Component, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart :ShoppingCart;

  constructor(private shoppingCardService: ShoppingCartService) { }

  addCart() {
    this.shoppingCardService.addToCart(this.product);
  }

 

 

}




