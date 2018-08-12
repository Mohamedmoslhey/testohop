import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }


  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges()
    .map(products =>  {return products.map(product => ({ key: product.key, ...product.payload.val() }))
  }); // must know that value change important in field as it not xplain in video
}
get(productId) {
  return this.db.object('/products/' + productId);
}

getUpdate(productId , product) {
  return this.db.object('/products/' + productId).update(product);
}
delete(productId){
  return this.db.object('/products/' + productId).remove();

}


}
