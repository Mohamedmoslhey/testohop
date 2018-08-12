import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {


    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges()
    .map(categories =>  categories.map(category => ({ key: category.key, ...category.payload.val() }))
    );
     /**{
      query: {
orderByChild: 'name'

      }this how video write but actually now it write according to refrence ref
  }**/
  }
}
