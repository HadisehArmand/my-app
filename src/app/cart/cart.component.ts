import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngneat/elf';
import { createStore, select, withProps } from '@ngneat/elf';
import { AppComponent } from '../app.component';
import { state } from '@angular/animations';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

interface ProductStore {
  product?: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

export const productStore = createStore(
  { name: 'test' },
  withProps<ProductStore>({})
);
productStore.subscribe((state) => {
  console.log(state);
});
// productStore.update((state) => state);

productStore.subscribe((state) => {
  for (let product of state.product || []) {
    if (product.id === 1) {
      console.log(product.quantity);
    }
  }
});
persistState(productStore, {
  key: 'test',
  storage: localStorageStrategy,
});
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
export class CartComponent extends AppComponent {
  constructor() {
    super(productStore);
  }
  productStore.update()
  
}
