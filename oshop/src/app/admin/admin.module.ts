import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from 'app/admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from 'app/admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import { AdminAuthGuardService } from 'app/admin/services/admin-auth-guard.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({

  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },

      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },

      {
        path: 'admin/products',
        component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
      },

      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },

    ])
      
  ],

 
  providers: [
    AdminAuthGuardService
   
  ],

})
export class AdminModule { }
