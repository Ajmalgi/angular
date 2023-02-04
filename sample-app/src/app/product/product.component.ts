import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product = [
    { 'id' : 1,
      'product_name':'phone',
      'seller':'ajmal',
      'stock':3,
      'price':10000,
      'image': '../assets/products/p1.webp'
    },
    { 'id' : 2,
      'product_name':'phone',
      'seller':'misbah',
      'stock':2,
      'price':15000,
      'image': '../assets/products/p2.webp'
    },
    { 'id' : 3,
      'product_name':'phone',
      'seller':'misbah',
      'stock':0,
      'price':15000,
      'image': '../assets/products/p3.webp'
    }
  ]
  set_class = false
  set_color = false

 get_data(data:string){
  console.log(data)
 }
  user_name = 'hello'
  
}

