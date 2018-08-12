import { ShoppingCart } from 'shared/model/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

    @Input('product') product: Product;
    @Input('shopping-cart') shoppingCart:ShoppingCart ; 
  
    constructor(private shopingCardService: ShoppingCartService) { }
  
    addCart() {
      this.shopingCardService.addToCart(this.product);
    }
  
    
  
    removeCart(){
      this.shopingCardService.removeFromCart(this.product);
    }

   
  
  }
  
  
  
  
  


