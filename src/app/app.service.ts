import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productStore = createStore(
    { name: 'product' },
    withProps<ProductStore>({})
  );

  constructor() {
    const persist = persistState(this.productStore, {
      key: 'product',
      storage: localStorageStrategy,
    });
    this.productStore.subscribe((state) => {
      for (let product of state.productItem || []) {
        console.log('Product update:', product);
      }
    });
  }

  getProductItem$() {
    return this.productStore.pipe(select((state) => state.productItem));
  }

  updateProductItems(newProducts: any[]) {
    this.productStore.update((state) => ({
      ...state,
      productItem: newProducts,
    }));
  }

  fetchDataFromApi() {
    fetch('https://65eca0ba0ddee626c9b0b764.mockapi.io/api/product')
      .then((response) => response.json())
      .then((newProducts) => {
        newProducts.forEach(
          (product: { id: number; name: string; quantity: number }) =>
            (product.quantity = 0)
        );
        this.updateProductItems(newProducts);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }
}
