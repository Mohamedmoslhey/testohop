import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any = {
  
  };
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();
    /** in video he write it without value change it cause error
     *
      InvalidPipeArgument: '[object Object]'**/
     this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).valueChanges().take(1).subscribe(p => {
        this.product = p;
        console.log(p);
      });
     
    }
  }
  save(product) {
   if(this.id) this.productService.getUpdate(this.id, product);
   else this.productService.create(product);
    this.router.navigate(['/admin/products']); // this to redirct user to product page
    
  }

  delete() {
    if(!confirm('Are you sure ?')) return;
             this.productService.delete(this.id);
         this.router.navigate(['/admin/products']); // after delete navigate to list of product autoomatically
   
  }

  ngOnInit() {
  }


}
