import { Product } from 'shared/model/product';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit ,OnDestroy{
 
// Products$; use it to make it obervable but when usinfg filteering cannot use it 
Products: Product[] ; //make it in video {title :string}
// As best practice make it initial
subscription: Subscription;
tableResource: DataTableResource<Product>;
items: Product[] = [] ;
itemCount: number;
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(Products =>{
       this.Products = (Products as Product[]);
this.initializeTable((Products as Product[]));
     
    }); // we Cast Products as he not know what equal are key<>title
   }

   private initializeTable(Products: Product[]) {
    this.tableResource = new DataTableResource((Products as Product[]));  //
    this.tableResource.query({offset: 0})
    .then(items =>this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);// initial data table;
  }

  reloadItems(params) {

    if(!this.tableResource) return;
this.tableResource.query(params).then(items =>this.items = items);
  }
   filter(text: string){
    let filteredProduct = (text) ? 
    this.Products.filter(p =>p.title.toLowerCase().includes(text.toLowerCase())) : this.Products;
    this.initializeTable(filteredProduct);
     
   }
   ngOnInit() {
  }
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

 

}
