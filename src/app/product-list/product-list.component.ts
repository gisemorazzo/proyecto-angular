import { Component, OnInit } from '@angular/core';
//import { IProduct } from './interface/Iproduct';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  [x: string]: any;
  products: Array<Product> = [
    {
      name: "kaiak",
      type: "Perfume",
      price: 4000,
      stock: 3,
      imagen: "assets/img/kaiak-aventura-femenino.png",
      clearance: false,
      quantity: 0,
    },
    {
      name: "humor",
      type: "perfume",
      price: 3500,
      stock: 23,
      imagen: "assets/img/kaiak-aventura-femenino.png",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Tododia Frambueza",
      type: "crema corporal",
      price: 1500,
      stock: 33,
      imagen: "assets/img/kaiak-aventura-femenino.png",
      clearance: false,
      quantity: 0,
    },
  ]
  product: any;
  upQuantity(product: Product): void {
    if (product.quantity < product.stock)
      product.quantity++;
  }
  downQuantity(product: Product): void {
    if (product.quantity > 0)
      product.quantity--;
  }
  changeQuantity(event: { key: any; }, product: Product): void {
    console.log(event.key);
  }
}
