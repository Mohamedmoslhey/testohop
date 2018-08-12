import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingCartComponent } from 'app/shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'app/shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { ProductsFilterComponent } from 'app/shopping/components/products/products-filter/products-filter.component';
import { MyOrdersComponent } from 'app/shopping/components/my-orders/my-orders.component';
import { ShoppingCartSummaryComponent } from 'app/shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingformComponent } from 'app/shopping/components/shippingform/shippingform.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,FormsModule,
    RouterModule.forChild([
    
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },


     

    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsFilterComponent,
      ShoppingCartSummaryComponent,
    ShippingformComponent
   
  ]
})
export class ShoppingModule { }
