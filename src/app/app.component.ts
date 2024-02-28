import {
  AfterContentInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    NgFor,
    NgOptimizedImage,
  ],
  providers: [],
})
export class AppComponent {
  products: Product[] = [
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
  ];
}
