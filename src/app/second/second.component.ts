import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {}
