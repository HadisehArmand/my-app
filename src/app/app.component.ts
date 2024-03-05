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
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
declare var localStorage: Storage;

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
  constructor(private router: Router) {}

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
