import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';

import { ProductService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cart',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductItem$().subscribe((items) => {
      this.products = items || [];
    });
    this.productService.fetchDataFromApi();
  }

  increaseQuantity(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.quantity++;
      this.productService.updateProductItems(this.products);
    }
  }

  decreaseQuantity(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      if (product.quantity > 0) {
        product.quantity--;
        this.productService.updateProductItems(this.products);
      }
    }
  }

  getTotalPrice(product: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }): number {
    return product.price * product.quantity;
  }

  getTotalPriceForAllProducts(): number {
    const relevantProducts = this.products.filter(
      (product) => product.quantity > 0
    );
    return relevantProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
