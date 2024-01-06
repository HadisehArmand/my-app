import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {}
