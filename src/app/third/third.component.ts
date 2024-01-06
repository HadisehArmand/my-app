import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: '<div>{{ componentName }} Lifecycle Component</div>',
  selector: 'app-third',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent implements OnInit, OnDestroy {
  componentName: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.componentName = this.elementRef.nativeElement.tagName.toLowerCase();
    alert(`Entering ${this.componentName} Component`);
  }

  ngOnDestroy(): void {
    alert(`Leaving ${this.componentName} Component`);
  }
}
