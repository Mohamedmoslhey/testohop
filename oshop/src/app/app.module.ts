import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AdminModule } from 'app/admin/admin.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';



@NgModule({
  declarations: [
    AppComponent
       
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
   
  
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
          { path: 'login', component: LoginComponent },
          ])

  ],

  providers: [
    AdminAuthGuardService,
],
    // Every service make it in provider
  bootstrap: [AppComponent]
})
export class AppModule { }
