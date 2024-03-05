import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngneat/elf';
import { createStore, select, withProps } from '@ngneat/elf';
import { AppComponent } from '../app.component';
import { state } from '@angular/animations';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
interface ProductStore {
  productItem?: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}
var products: ProductStore = {
  productItem: [
    {
      id: 1,
      name: 'Keyboard White',
      price: 200000,
      image:
        'https://i.pinimg.com/564x/f0/9d/02/f09d0211f4db7064643c2865e915b1ca.jpg',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Keyboard Black',
      price: 250000,
      image:
        'https://i.pinimg.com/564x/90/1c/84/901c84d227cffd13629bdfb3b6393a6d.jpg',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Keyboard Pink',
      price: 220000,
      image:
        'https://i.pinimg.com/564x/84/b1/2c/84b12c68466ec126ed3523ac7b61fffb.jpg',
      quantity: 0,
    },
    {
      id: 4,
      name: 'Mouse White',
      price: 180000,
      image:
        'https://i.pinimg.com/564x/18/5c/02/185c02f4567f7413876fd7ac03131788.jpg',
      quantity: 0,
    },
    {
      id: 5,
      name: 'Mouse Pink',
      price: 200000,
      image:
        'https://i.pinimg.com/564x/83/92/ba/8392ba933b8e97c5c916a7826299eaa5.jpg',
      quantity: 0,
    },
    {
      id: 6,
      name: 'Mouse Blue',
      price: 230000,
      image:
        'https://i.pinimg.com/736x/a1/65/17/a165178657a384beba10219af55b3474.jpg',
      quantity: 0,
    },
  ],
};
const productStore = createStore(
  { name: 'product' },
  withProps<ProductStore>({})
);

export const persist = persistState(productStore, {
  key: 'product',
  storage: localStorageStrategy,
});

export const productItem$ = productStore.pipe(
  select((state) => state.productItem)
);
productStore.subscribe((state) => {
  for (let producti of state.productItem || []) {
    console.log(producti.quantity);
    console.log('product update');
  }
});

productStore.update((state) => ({
  ...state,
  productItem: products.productItem,
}));

console.log([productStore.getValue().productItem] || []);

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
  }[] = productStore.getValue().productItem || [];

  increaseQuantity(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.quantity++;
      productStore.update((state) => ({
        ...state,
        productItem: this.products,
      }));
    }
  }
  decreaseQuantity(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      if (product.quantity > 0) {
        product.quantity--;
        productStore.update((state) => ({
          ...state,
          productItem: this.products,
        }));
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
